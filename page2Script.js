$(document).ready(function() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if (page == "finalCalculation.html") {
    displayDValues(); // Prevents error where this would be called before the second page is loaded
  }


var wValueRules = [
      [
        'W1 cannot be a negative number or 0',
        'Sum of weights must equal 100%'
      ],
      [
        'W2 cannot be a negative number or 0',
        'Sum of weights must equal 100%'
      ],
      [
        'W3 cannot be a negative number or 0',
        'Sum of weights must equal 100%'
      ],
      [
        'W4 cannot be a negative number or 0',
        'Sum of weights must equal 100%'
      ],
      [
        'W5 cannot be a negative number or 0',
        'Sum of weights must equal 100%'
      ],
      [
        'W6 cannot be a negative number or 0',
        'Sum of weights must equal 100%'
      ],

    ]; // Store rules that each s value must abide by


    // ***** FUNCTIONS *****

    /// Function that is used to find which of the sValue buttons the user clicked
    function findWValue(wID) {
      if (wID == 'w1') {
        return ['w1Val', 0]; // Return the id where the html will be appeneded to and where to get the information from the w-value rules
      }

      else if (wID == 'w2') {
        return ['w2Val', 1]; // Return the id where the html will be appeneded to and where to get the information from the w-value rules
      }

      else if (wID == 'w3') {
        return ['w3Val', 2]; // Return the id where the html will be appeneded to and where to get the information from the w-value rules
      }

      else if (wID == 'w4') {
        return ['w4Val', 3]; // Return the id where the html will be appeneded to and where to get the information from the w-value rules
      }

      else if (wID == 'w5') {
        return ['w5Val', 4]; // Return the id where the html will be appeneded to and where to get the information from the w-value rules
      }

      else if (wID == 'w6') {
        return ['w6Val', 5]; // Return the id where the html will be appeneded to and where to get the information from the w-value rules
      }

    }

    // Function that is used to collect all the user inputted s values

    function collectWValues() {
        var w1Value = $("#w1Val").val();
        var w2Value = $("#w2Val").val();
        var w3Value = $("#w3Val").val();
        var w4Value = $("#w4Val").val();
        var w5Value = $("#w5Val").val();
        var w6Value = $("#w6Val").val();
        return [w1Value, w2Value, w3Value, w4Value, w5Value, w6Value];
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
      if (!currVal) {
        return true; // If the value that is passed in is invalid or empty, return false right away
      }

      else {
        return false;
      }

    }

    // Change color of box if it isn't valid

    function boxColorChanger(wID, isValid) {
      if (!isValid) {
        $(wID).css('border-color', 'red');
      }

      else {
        $(wID).css('border-color', ""); // If the value is valid, then keep the box its regular color
      }
    }

    // Overall value checker

    function overallChecker(wValues) {
      var noError = true;
      if (wValues.length != 6) {
          alert("Something went wrong.");
          noError = false;
      }

      var w1Value = Number(wValues[0]);
      var w2Value = Number(wValues[1]);
      var w3Value = Number(wValues[2]);
      var w4Value = Number(wValues[3]);
      var w5Value = Number(wValues[4]);
      var w6Value = Number(wValues[5]);

      var total = w1Value + w2Value + w3Value + w4Value + w5Value + w6Value;

      if (total != 100) {
          swal("Error!", "The sum of the weights must be 100%!", "error");
          noError = false;
      }

      // General case for one variable. For each value (these should be strings at first), check if it is a number or is empty.
      // If not, convert it to a number, then check if it is negative. If it isn't, make sure its a intenger.

      //W1 CASE BEGINS
      if (isNaN(w1Value) || w1Value == '') {
         swal("Error!", "W1" + " must be a positive number and cannot be empty!", "error");
         boxColorChanger(w1Val, false);
       }

       currVal = Number(w1Value);

       if (w1Value < 0) {
         swal("Error!","W1" + " cannot be negative!", "error");
         boxColorChanger(w1Val, false);
       }

       else if (!Number.isInteger(w1Value)) {
         swal("Error!", "W1" + " must be an integer!", "error");
         boxColorChanger(w1Val, false);
       }

       else {
          boxColorChanger(w1Val, true);
       }
	//W1 CASE ENDS


	//W2 CASE BEGINS
      if (isNaN(w2Value) || w2Value == '') {
         swal("Error!", "W2" + " must be a positive number!", "error");
         boxColorChanger(w2Val, false);
       }

       currVal = Number(w2Value);

       if (w2Value < 0) {
         swal("Error!","W2" + " cannot be negative!", "error");
         boxColorChanger(w2Val, false);
       }

       else if (!Number.isInteger(w2Value)) {
         swal("Error!", "W2" + " must be an integer!", "error");
         boxColorChanger(w2Val, false);
       }

       else {
          boxColorChanger(w2Val, true);
       }
	//W2 CASE ENDS

	//W3 CASE BEGINS
      if (isNaN(w3Value) || w3Value == '') {
         swal("Error!", "W3" + " must be a positive number!", "error");
         boxColorChanger(w3Val, false);
       }

       currVal = Number(w3Value);

       if (w3Value < 0) {
         swal("Error!","W3" + " cannot be negative!", "error");
         boxColorChanger(w3Val, false);
       }

       else if (!Number.isInteger(w1Value)) {
         swal("Error!", "W3" + " must be an integer!", "error");
         boxColorChanger(w3Val, false);
       }

       else {
          boxColorChanger(w3Val, true);
       }
	//W3 CASE ENDS

	//W4 CASE BEGINS
      if (isNaN(w4Value) || w4Value == '') {
         swal("Error!", "W4" + " must be a positive number!", "error");
         boxColorChanger(w4Val, false);
       }

       currVal = Number(w4Value);

       if (w4Value < 0) {
         swal("Error!","W4" + " cannot be negative!", "error");
         boxColorChanger(w4Val, false);
       }

       else if (!Number.isInteger(w4Value)) {
         swal("Error!", "W4" + " must be an integer!", "error");
         boxColorChanger(w4Val, false);
       }

       else {
          boxColorChanger(w4Val, true);
       }
	//W4 CASE ENDS

	//W5 CASE BEGINS
      if (isNaN(w5Value) || w5Value == '') {
         swal("Error!", "W5" + " must be a positive number!", "error");
         boxColorChanger(w5Val, false);
       }

       currVal = Number(w5Value);

       if (w5Value < 0) {
         swal("Error!","W5" + " cannot be negative!", "error");
         boxColorChanger(w5Val, false);
       }

       else if (!Number.isInteger(w5Value)) {
         swal("Error!", "W5" + " must be an integer!", "error");
         boxColorChanger(w5Val, false);
       }

       else {
          boxColorChanger(w5Val, true);
       }
	//W5 CASE ENDS

	//W6 CASE BEGINS
      if (isNaN(w6Value) || w6Value == '') {
         swal("Error!", "W6" + " must be a positive number!", "error");
         boxColorChanger(w6Val, false);
       }

       currVal = Number(w6Value);

       if (w6Value < 0) {
         swal("Error!","W6" + " cannot be negative!", "error");
         boxColorChanger(w6Val, false);
       }

       else if (!Number.isInteger(w6Value)) {
         swal("Error!", "W6" + " must be an integer!", "error");
         boxColorChanger(w6Val, false);
       }

       else {
          boxColorChanger(w6Val, true);
       }
	//W6 CASE ENDS

      return noError;

    }


    // Event Functions

    $("#nextPageButton").click(function() {
        // sValues = collectSValues(); // Get all the s1values from the user
        var sValues = [];
        sessionStorage.isDistinct = $("#d1Val").is(':checked');
        sessionStorage.sValues = collectSValues(sValues);

    });

function displayDValues() {
	var dValues = collectDValues();
	document.getElementById("d1data").placeholder = dValues[0];
	document.getElementById("d2data").placeholder = dValues[1];
	document.getElementById("d3data").placeholder = dValues[2];
	document.getElementById("d4data").placeholder = dValues[3];
	document.getElementById("d5data").placeholder = dValues[4];
	document.getElementById("d6data").placeholder = dValues[5];
  console.log(dValues);
}

function collectDValues() {
  var d1Val;
  if (sessionStorage.isDistinct === 'true') {
	  d1Val = 1;
	}

	else {
	  d1Val = 0;
	}

  var sValueArr = stringToNum(); // Get the s-values as numbers
	document.getElementById("d1data").placeholder = d1Val;

  var d2Val = 1 - (sValueArr[1] / sValueArr[0]);
  var d3Val = 1 - (sValueArr[2] / sValueArr[0]);
  var d4Val = 1 - (sValueArr[4] / sValueArr[3]);
  var d5Val = 1 - (sValueArr[5] / sValueArr[3]);
  var d6Val = 1 - (sValueArr[6] / sValueArr[0]);

	return [d1Val, d2Val, d3Val, d4Val, d5Val, d6Val];
}


function stringToNum() {
    var tempArr = sessionStorage.sValues.split(","); // Get the s-values
    var finalArr = [];
    var index = 0;
    for (index; index < tempArr.length; index++) {
        finalArr.push(parseInt(tempArr[index]));
    }

    return finalArr;

}


// **** EVENT FUNCTIONS ****

$("#calcButton").click(function() {
	var dValues = collectDValues();
	var wValues = collectWValues(); //grabs the array of weights
	var noError = overallChecker(wValues);
	if (!noError || wValues.length != dValues.length) {
    swal("Error!", "There has been some error. Please make sure your weights are positive integers and add up to 100", "error");
    return;
  }

  var index = 0;
  var result = 0; // Store final DSQI value
  for (index; index < dValues.length; index++) {
      result += dValues[index] * wValues[index];
  }

  result = (result / 100).toFixed(3); // Convert the dsqi value to a decimal with up to 3 decimal values

  if (result > 0.25) {
    swal("Congratuations!", "Your DSQI is " + result + "! That is higher than average!", "success");
  }

  else if(result < 0.15) {
    swal("Bummer!", "Your DSQI is " + result + ". That is lower than average.", "error");
  }

  else {
    swal("Spot on!", "Your DSQI is " + result + ". That is pretty average!", "info");
  }

});

// ERROR HANDLING FOR WEIGHT VALUES



    $(".wVal").on("input", function() {
        var currID = String(($(this).attr('id')));; // Get the current id of the element
        var currIDNumber = currID.substr(1, 1); // Get the specific number next to the W in wVal
        var currVal = $("#" + currID).val();; // Save the current weight value
        currVal = Number(currVal);
        if (currVal < 0) {
          swal("Error!","W" + currIDNumber + " cannot be negative!", "error");
          boxColorChanger(currID, false);
        }

        else {
           boxColorChanger(currID, true);
        }

    });

});
