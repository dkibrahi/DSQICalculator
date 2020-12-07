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
        return ['w1Val', 0]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (wID == 'w2') {
        return ['w2Val', 1]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (wID == 'w3') {
        return ['w3Val', 2]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (wID == 'w4') {
        return ['w4Val', 3]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (wID == 'w5') {
        return ['w5Val', 4]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (wID == 'w6') {
        return ['w6Val', 5]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
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

        if (w2Val >=0) {
            alert("W2 cannot be negative or equal to zero");
        }

        if (w3Val >=0) {
            alert("W3 cannot be negative or equal to zero");
        }

        if (w4Val >=0) {
            alert("W4 cannot be negative or equal to zero");
        }

        if (w5Val >=0) {
            alert("W5 cannot be negative or equal to zero");
        }

        if (w6Val >=0) {
            alert("W6 cannot be negative or equal to zero");
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






});
