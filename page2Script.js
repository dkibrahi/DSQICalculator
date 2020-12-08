$(document).ready(function() {
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

    function collectSValues(temp) {
        temp.push($("#s1Val").val());
        temp.push($("#s2Val").val());
        temp.push($("#s3Val").val());
        temp.push($("#s4Val").val());
        temp.push($("#s5Val").val());
        temp.push($("#s6Val").val());
        temp.push($("#s7Val").val());
        return temp;
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


    // Function that is used to make sure that only valid numbers are used.

    function numChecker(currVal) {
      var validNums = '0123456789';
      var index = 0;
      for (index; index < currVal.length; index++) {
        if (!validNums.includes(currVal[index])) {
            return false; // If one of the values in the input box isn't a number, return false
        }
      }

      return true; // If all numbers are valid, return true

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

    function overallChecker(sValues) {
        if (wValues.length != 6) {
          alert("Something went wrong.");
        }

        var w1Val = parseInt(wValues[0]);
        var w2Val = parseInt(wValues[1]);
        var w3Val = parseInt(wValues[2]);
        var w4Val = parseInt(wValues[3]);
        var w5Val = parseInt(wValues[4]);
        var w6Val = parseInt(wValues[5]);


        if ((w1Val + w2Val+ w2Val+ w3Val+ w4Val+ w5Val+ w6Val) != 100) {
            alert("Sum of weights must be equal to 100%");
        }

    }

    // Put in arrows

    tippy('.wHelp', {
        content: 'Click for help!',
        placement: 'left',
        animation: 'scale',
        inertia: true,
      });


    // Event Functions

    $("#nextPageButton").click(function() {
        // sValues = collectSValues(); // Get all the s1values from the user
        var sValues = [];
        localStorage.isDistinct = $("#d1Val").is(':checked');
        localStorage.sValues = collectSValues(sValues);
        console.log(localStorage.sValues);
        console.log(localStorage.isDistinct);
    });


    $(".wHelp").click(function() {
        $('.wInformation').remove();
        var backgroundID = String(($(this).attr('id'))); // Get the specific id for the s-value
        var wInfo = findWValue(backgroundID);



        var wID = wInfo[0]; // Get new value HTML should be appended to
        var messageNumber = wInfo[1]; // Get the index value to access the appripriate message in the sValueRules arrary

        $("#" + wID).after("<div class = 'wInformation' id = '" + wID + "Information'></div>");
        $("#" + wID + "Information").append("<div id = 'close'>+</div><br><br>");
        $("#" + wID + "Information").append("<ul id = '" + wID + "UL'></ul>");

        var index = 0;
        for (index; index < wValueRules[messageNumber].length; index++) {
            $("#" + wID + "UL").append("<li> " + wValueRules[messageNumber][index] + " </li>"); // Output all the rules for that s value
        }

        $("#close").click(function() {
          $('.wInformation').remove();
        });

    });

$("#calcButton").click(function() {

var dValues = [0, 0.42857, 0.14286, 0.28571, 0.28571, 0.57143]; //DEFAULT VALUES, WILL BE CHANGED ONCE MERGED
var wValues = collectWValues(); //grabs the array of weights
var result = 0;
for(i = 0; i < wValues.length; i++) //iterates through both arrays and multiplies them at each index
{
	for(j=0; j < dValues.length; j++)
	{
		wValues[j] = wValues[j]/100;
		result = result + (wValues[j] * dValues[j]);
	}
}
document.getElementById("dsqiData").placeholder = result;
});

// ERROR HANDLING FOR WEIGHT VALUES

    $("#w1Val").on("input", function() {
	var w1Val = $("#w1Val").val();
	w1Val = parseInt(w1Val);

        if (w1Val < 0) {
            alert("W1 cannot be negative");
            console.log(localStorage.sValues);
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
