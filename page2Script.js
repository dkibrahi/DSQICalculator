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
        $("#" + wID).css('border-color', 'red');
      }

      else {
        $("#" + wID).css('border-color', ""); // If the value is valid, then keep the box its regular color
      }
    }

    // Overall value checker

    function overallChecker(wValues) {
      var noError = true;
      if (wValues.length != 6) {
          alert("Something went wrong.");
          noError = false;
      }

      var w1Val = parseInt(wValues[0]);
      var w2Val = parseInt(wValues[1]);
      var w3Val = parseInt(wValues[2]);
      var w4Val = parseInt(wValues[3]);
      var w5Val = parseInt(wValues[4]);
      var w6Val = parseInt(wValues[5]);

      var total = w1Val + w2Val + w3Val + w4Val + w5Val + w6Val;

      if (total != 100) {
          alert("Sum of weights must be equal to 100%");
          noError = false;
      }

      return noError;

    }


    // Event Functions

    $("#nextPageButton").click(function() {
        // sValues = collectSValues(); // Get all the s1values from the user
        var sValues = [];
        sessionStorage.isDistinct = $("#d1Val").is(':checked');
        sessionStorage.sValues = collectSValues(sValues);
        console.log(sessionStorage.sValues);
        console.log(sessionStorage.isDistinct);

    });

function displayDValues(){
	var dValues = collectDValues(sessionStorage.isDistinct, sessionStorage.sValues);
	document.getElementById("d1data").placeholder = dValues[0];
	document.getElementById("d2data").placeholder = dValues[1];
	document.getElementById("d3data").placeholder = dValues[2];
	document.getElementById("d4data").placeholder = dValues[3];
	document.getElementById("d5data").placeholder = dValues[4];
	document.getElementById("d6data").placeholder = dValues[5];
}

function collectDValues(checked, sValues) {
  var d1Val;
  if (checked) {
	  d1Val = 1;
	}

	else {
	  d1Val = 0;
	}

	document.getElementById("d1data").placeholder = d1Val;

  var d2Val = 1- (parseInt(sValues.substr(2, 3)))/(parseInt(sValues.substr(0,1)));
  var d3Val = 1 - (parseInt(sValues.substr(4, 5)))/ (parseInt(sValues.substr(0,1)));
  var d4Val = 1 - (parseInt(sValues.substr(8, 9)))/(parseInt(sValues.substr(6, 7)));
  var d5Val = 1 - (parseInt(sValues.substr(10, 11)))/(parseInt(sValues.substr(6, 7)));
  var d6Val = 1 - (parseInt(sValues.substr(12, 13)))/(parseInt(sValues.substr(6, 7)));

	return [d1Val, d2Val, d3Val, d4Val, d5Val, d6Val];
}


$("#calcButton").click(function() {

	var dValues = collectDValues(sessionStorage.isDistinct, sessionStorage.sValues);
	var wValues = collectWValues(); //grabs the array of weights
	var result = 0;
	var noError = overallChecker(wValues);
	if (noError) {
		for(i = 0; i < wValues.length; i++) //iterates through both arrays and multiplies them at each index
		{
			for(j=0; j < dValues.length; j++)
			{
				wValues[j] = wValues[j]/100;
				result = result + (wValues[j] * dValues[j]);
			}
		}
		document.getElementById("dsqiData").placeholder = result;


		if (result > 0.2) {
			alert("Congrats! Your DSQI is above average!");
		}

		else if(result < 0.2) {
			alert("Unfortunately, your DSQI is below average");
		}

		else {
			alert("Your DSQI is exactly the average!");
		}
	}

});

// ERROR HANDLING FOR WEIGHT VALUES

    $("#w1Val").on("input", function() {
	var w1Val = $("#w1Val").val();
	w1Val = parseInt(w1Val);

        if (w1Val < 0) {
            alert("W1 cannot be negative");
        }

    });


    $("#w2Val").on("input", function() {
	var w2Val = $("#w2Val").val();
	w2Val = parseInt(w2Val);

        if (w2Val < 0) {
            alert("W2 cannot be negative");
        }

    });

    $("#w3Val").on("input", function() {
	var w3Val = $("#w3Val").val();
	w3Val = parseInt(w3Val);

        if (w3Val < 0) {
            alert("W3 cannot be negative");
        }

    });

    $("#w4Val").on("input", function() {
	var w4Val = $("#w4Val").val();
	w4Val = parseInt(w4Val);

        if (w4Val < 0) {
            alert("W4 cannot be negative");
        }

    });

    $("#w5Val").on("input", function() {
	var w5Val = $("#w5Val").val();
	w5Val = parseInt(w5Val);

        if (w5Val < 0) {
            alert("W5 cannot be negative");
        }

    });

    $("#w6Val").on("input", function() {
	var w6Val = $("#w6Val").val();
	w2Val = parseInt(w6Val);

        if (w6Val < 0) {
            alert("W6 cannot be negative");
        }

    });


});
