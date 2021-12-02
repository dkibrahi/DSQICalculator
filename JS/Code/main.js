import { sValueRules } from '../Code/rules.js'

// ***** FUNCTIONS *****

// Function that is used to reset any current values in the form 

$("#resetButton").click(function() {
  sessionStorage.clear();
  location.reload();
})

// Function that is used to find which of the sValue buttons the user clicked

var findSValue = function(sID) {
  var idArr = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];

  for (var idx = 0; idx < idArr.length; idx++) {
    if (sID == idArr[idx]) {
      var newId = sID + 'Val';
      return [newId, idx]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
    }
  }
  
  return ['d1Val', 7]; // otherwise, the d-button was clicked
}

// Function that is used to collect all the user inputted s values

function collectSValues() {
    var s1Value = $("#s1Val").val();
    var s2Value = $("#s2Val").val();
    var s3Value = $("#s3Val").val();
    var s4Value = $("#s4Val").val();
    var s5Value = $("#s5Val").val();
    var s6Value = $("#s6Val").val();
    var s7Value = $("#s7Val").val();
    return [s1Value, s2Value, s3Value, s4Value, s5Value, s6Value, s7Value];
}

// Function that makes sure no empty user values are passed

function emptyChecker(currVal) {
  return !currVal;
}

// Change color of box if it isn't valid

function boxColorChanger(sID, isValid) {
  if (!isValid) {
    $("#" + sID).css('border-color', 'red');
  }

  else {
    $("#" + sID).css('border-color', ""); // If the value is valid, then keep the box its regular color
  }
}

// Overall value checker

function overallChecker(sValues, errorList) {
    if (sValues.length != 7) {
      alert("Something went wrong. Refresh the page and try again");
    }

    var index = 1;
    var s1Val = parseInt(sValues[0]);
    var s4Val = parseInt(sValues[3]);
    for (index; index < sValues.length; index++) {
        if ((index < 3 || index == 6) && parseInt(sValues[index]) > s1Val) {
          boxColorChanger("s1Val", false);
          boxColorChanger("s" + (index + 1) + "Val", false); // If s2, s3, or s7 are less than s1, make their box red
          errorList.push("S1 cannot be less than S" + (index + 1));
        }

        else if (index >= 4 && index < 6 && parseInt(sValues[index]) > s4Val) {
          boxColorChanger("s4Val", false);
          boxColorChanger("s" + (index + 1) + "Val", false); // If s2, s3, or s7 are less than s1, make their box red
          errorList.push("S4 cannot be less than S" + (index + 1));
        }
    }

    return errorList;
}

// Function that is used to show the user all their errors

function errorModal(errorList) {
  $(".overallErrors").remove();
  $("#nextButton").after("<div class = 'overallErrors'></div>");
  $(".overallErrors").append("<div id = 'close'>+</div><br><br>");
  $(".overallErrors").append("<ul id = 'userErrors'></ul>");

  var index = 0;
  for (index; index < errorList.length; index++) {
      $("#userErrors").append("<li>" + errorList[index] + "</li>"); // Output all the rules for that s value
  }

  $("#close").click(function() {
    $(".overallErrors").remove();
  });
}


function sValueChecker() {
  if (!sessionStorage.sValues) {
      return false; // If the session storage is empty, return false
  }

  var index = 0;
  sValueArr = sessionStorage.sValues.split(",");
  for (index; index < sValueArr.length; index++) {
      if (isNaN(sValueArr[index])) {
        return false;
      }
  }

  return true;
}

// Put in arrows

tippy('.sHelp', {
    content: 'Click for help!',
    placement: 'top',
    animation: 'scale',
    inertia: true,
  });


// Event Functions

$(".sHelp").click(function() {
  var currID = $(this).attr('id') + 'ValInformation'; // find id of s-box that was clicked
  var openBoxID = $(".sInformation:visible").attr('id');

  $('.sInformation').remove();

  console.log(currID, openBoxID);

  if (openBoxID != undefined && openBoxID == currID) {
    return;
  }

  var backgroundID = String(($(this).attr('id'))); // Get the specific id for the s-value
  var sInfo = findSValue(backgroundID); // Find what the id of the new modal should be called

  var sID = sInfo[0]; // Get new value HTML should be appended to
  var messageNumber = sInfo[1]; // Get the index value to access the appripriate message in the sValueRules arrary

  $("#" + sID).after("<div class = 'sInformation' id = '" + sID + "Information'></div>");
  $("#" + sID + "Information").append("<div id = 'close'>+</div><br><br>");
  $("#" + sID + "Information").append("<ul id = '" + sID + "UL'></ul>");

  var index = 0;
  for (index; index < sValueRules[messageNumber].length; index++) {
      $("#" + sID + "UL").append("<li>" + sValueRules[messageNumber][index] + "</li>"); // Output all the rules for that s value
  }

  $("#close").click(function() {
    $('.sInformation').remove();
  });

});

$("input").on("input", function(event) {
  var currID = String(($(this).attr('id'))); // Get the current id value
  var currIDNumber = currID.substr(1, 1);
  var userValue = $("#" + currID).val(); // Get the current user value
  var isValid = (!emptyChecker(userValue) && !isNaN(userValue) && parseInt(userValue) > 0) || userValue === "0"; // Call the value checker functions to see if s-value is valid
  if (Number(userValue) < 0) {
      swal("Error!", "S" + currIDNumber + " cannot be negative!", "error");
  }

  boxColorChanger(currID, isValid);
});


$("#nextPageButton").click(function(event) {
    var sValues = collectSValues(); // Get all the s1values from the user

    var isValid = true; // Will be used to check if the user values are ALL valid or invalid
    
    var errorList = [];
    var idArr = ['s1Val', 's2Val', 's3Val', 's4Val', 's5Val', 's6Val', 's7Val']; // s val

    var currSVal = 0; // store the current s value
    var intSVal = 0; // Store the integer version of the s value
    var sID = ''; // store current user ID

    for (var index = 0; index < sValues.length; index++) {
      currSVal = sValues[index];
      intSVal = parseInt(currSVal);
      sID = idArr[index];

      if (emptyChecker(currSVal)) {
          errorList.push("Invalid " + sID + ". You cannot leave values empty or put special characters");
      }

      else if (intSVal < 0) {
        errorList.push("Invalid " + sID + ". S-Values cannot be negative!");
      }

      else if ((intSVal.toString().length != currSVal.length) || Number(currSVal) != intSVal) {
        errorList.push("Invalid " + sID + ". You cannot put any character other than a digit between 0-9");
      }

      else if ((index == 0 || index == 3) && parseInt(sValues[index]) == 0) {
        errorList.push("Invalid " + sID + ". " + sID + " values need to be greater than 0!");
      }

      else {
        continue;
      }

      boxColorChanger(sID, false); // Make that box red
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
      errorModal(errorList);
      document.getElementById("userErrors").scrollIntoView(); // move to the error list
      return;
    }

    else {
      var originalLength = errorList.length;
      errorList = overallChecker(sValues, errorList); // Send the error list to find new errors

      if (errorList.length != originalLength) {
        errorModal(errorList);
        event.preventDefault(); // If new errors are added to the error list, prevent submission
        return;
      }
    }
});

var ls = sessionStorage.getItem('namespace.visited');
if (ls == null) {
  sessionStorage.setItem('namespace.visited', 1)
}

else if (sValueChecker()) {
  var sValueArr = sessionStorage.sValues.split(",");
  $("#s1Val").attr("value", sValueArr[0]);
  $("#s2Val").attr("value", sValueArr[1]);
  $("#s3Val").attr("value", sValueArr[2]);
  $("#s4Val").attr("value", sValueArr[3]);
  $("#s5Val").attr("value", sValueArr[4]);
  $("#s6Val").attr("value", sValueArr[5]);
  $("#s7Val").attr("value", sValueArr[6]);
  if (sessionStorage.isDistinct === 'true') {
      $("#d1Val").prop("checked", true);
  }

  else {
      $("#d1Val").prop("checked", false);
  }
}

export { findSValue, emptyChecker }; 