import { collectSValues, boxColorChanger, overallChecker } from '../Code/functions.js'

$(document).ready(function() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if (page == "finalCalculation.html") {
    displayDValues(); // Prevents error where this would be called before the second page is loaded
  }


  // ***** FUNCTIONS *****

  // Function that is used to reset any the values only on this page 

  $("#resetButton").click(function() {
    sessionStorage.wVals = ""; // set w vals to empty 
    location.reload();
  })

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

function displayDValues() {
	var dValues = collectDValues();
	document.getElementById("d1data").placeholder = dValues[0].toFixed(3); // grab d-value and set to 3 decimal places
	document.getElementById("d2data").placeholder = dValues[1].toFixed(3);
	document.getElementById("d3data").placeholder = dValues[2].toFixed(3);
	document.getElementById("d4data").placeholder = dValues[3].toFixed(3);
	document.getElementById("d5data").placeholder = dValues[4].toFixed(3);
	document.getElementById("d6data").placeholder = dValues[5].toFixed(3);
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

// Arrows for help boxes

tippy('#d1', {
    content: 'D1 is set to 1 if you chose the distinct method. Otherwise, it is 0',
    placement: 'bottom',
    animation: 'scale',
    inertia: true,
  });

tippy('#d2', {
    content: 'D2 = 1 - (S2 / S1)',
    placement: 'bottom',
    animation: 'scale',
    inertia: true,
  });

  tippy('#d3', {
      content: 'D3 = 1 - (S3 / S1)',
      placement: 'bottom',
      animation: 'scale',
      inertia: true,
    });

  tippy('#d4', {
      content: 'D4 = 1 - (S5 / S4)',
      placement: 'bottom',
      animation: 'scale',
      inertia: true,
    });

    tippy('#d5', {
        content: 'D5 = 1 - (S6 / S4)',
        placement: 'bottom',
        animation: 'scale',
        inertia: true,
    });

  tippy('#d6', {
      content: 'D6 = 1 - (S7 / S1)',
      placement: 'bottom',
      animation: 'scale',
      inertia: true,
  });



// **** EVENT FUNCTIONS ****

$("#nextPageButton").click(function() {
    sessionStorage.isDistinct = $("#d1Val").is(':checked');
    sessionStorage.sValues = collectSValues();
});

$("#calcButton").click(function() {
  var dValues = collectDValues();
  var wValues = collectWValues(); //grabs the array of weights
  var noError = overallChecker(wValues);
  if (!noError || wValues.length != dValues.length) {
        return;
    }

  sessionStorage.wVals = wValues;

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
    var currID = String(($(this).attr('id'))); // Get the current id of the element
    var currIDNumber = currID.substr(1, 1); // Get the specific number next to the W in wVal
    var currVal = $("#" + currID).val(); // Save the current weight value
    currVal = Number(currVal);
    if (currVal < 0) {
      swal("Error!","W" + currIDNumber + " cannot be negative!", "error");
      boxColorChanger(currID, false);
    }

    else {
      boxColorChanger(currID, true);
    }

});


if (sessionStorage.wVals) {
  var wValueArr = sessionStorage.wVals.split(",");
  $("#w1Val").attr("value", wValueArr[0]);
  $("#w2Val").attr("value", wValueArr[1]);
  $("#w3Val").attr("value", wValueArr[2]);
  $("#w4Val").attr("value", wValueArr[3]);
  $("#w5Val").attr("value", wValueArr[4]);
  $("#w6Val").attr("value", wValueArr[5]);
}

});