$(document).ready(function() {
    // ALL CODE GOES IN HERE
    var sValueRules = [
      [
        'S1 represents the total number of modules',
        'S1 cannot be a negative number or 0',
        'S1 must be greater than S2, S3, and S7'
      ],
      [
        'S2 represents the number of modules that rely on correct data input from the source or for produce data to be used elsewhere',
        'S2 cannot be a negative number',
        'S2 must be smaller than S1'
      ],
      [
        'S3 represents the number of modules that rely on prior processing',
        'S3 cannot be a negative number',
        'S3 must be smaller than S1'
      ],
      [
        'S4 represents the number of database items',
        'S4 cannot be a negative number and must be greater than 0',
        'S4 needs to be greater than S5 and S6'
      ],
      [
        'S5 represents the total number of unique database items',
        'S5 cannot be a negative number and must have a value smaller than S4'
      ],
      [
        'S6 represents the total number of segments in the database',
        'S6 cannot be a negative number and must have a value smaller than S4'
      ],
      [
        'S7 represents the number of modules with a single entry and exit point',
        'S7 cannot be a negative number and must have a value smaller than S1'
      ]

    ]; // Store rules that each s value must abide by

    // ***** FUNCTIONS *****

    /// Function that is used to find which of the sValue buttons the user clicked

    function findSValue(sID) {
      if (sID == 's1') {
        return ['s1Val', 0]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (sID == 's2') {
        return ['s2Val', 1]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (sID == 's3') {
        return ['s3Val', 2]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (sID == 's4') {
        return ['s4Val', 3]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (sID == 's5') {
        return ['s5Val', 4]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (sID == 's6') {
        return ['s6Val', 5]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

      else if (sID == 's7') {
        return ['s7Val', 6]; // Return the id where the html will be appeneded to and where to get the information from the s-value rules
      }

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

    function boxColorChanger(sID, isValid) {
      if (!isValid) {
        $("#" + sID).css('border-color', 'red');
      }

      else {
        $("#" + sID).css('border-color', ""); // If the value is valid, then keep the box its regular color
      }
    }

    // Overall value checker

    function overallChecker(sValues) {
        if (sValues.length != 7) {
          alert("Something went wrong.");
        }

        var s1Val = parseInt(sValues[0]);
        var s2Val = parseInt(sValues[1]);
        var s3Val = parseInt(sValues[2]);
        var s4Val = parseInt(sValues[3]);
        var s5Val = parseInt(sValues[4]);
        var s6Val = parseInt(sValues[5]);
        var s7Val = parseInt(sValues[6]);

        if (s1Val < s2Val || s1Val < s3Val || s1Val < s7Val) {
            alert("S1 cannot be less than S2, S3, or S7");
        }

        if (s4Val < s5Val || s4Val < s6Val) {
            alert("S4 cannot be less than S5 or S6");
        }

    }

    // Put in arrows

    tippy('.sHelp', {
        content: 'Click for help!',
        placement: 'left',
        animation: 'scale',
        inertia: true,
      });


    // Event Functions

    $(".sHelp").click(function() {
        $('.sInformation').remove();
        var backgroundID = String(($(this).attr('id'))); // Get the specific id for the s-value
        var sInfo = findSValue(backgroundID);

        var sID = sInfo[0]; // Get new value HTML should be appended to
        var messageNumber = sInfo[1]; // Get the index value to access the appripriate message in the sValueRules arrary

        $("#" + sID).after("<div class = 'sInformation' id = '" + sID + "Information'></div>");
        $("#" + sID + "Information").append("<div id = 'close'>+</div><br><br>");
        $("#" + sID + "Information").append("<ul id = '" + sID + "UL'></ul>");

        var index = 0;
        for (index; index < sValueRules[messageNumber].length; index++) {
            $("#" + sID + "UL").append("<li> " + sValueRules[messageNumber][index] + " </li>"); // Output all the rules for that s value
        }

        $("#close").click(function() {
          $('.sInformation').remove();
        });


    });

    $("input").on("input", function() {
      var currID = String(($(this).attr('id'))); // Get the current id value
      var userValue = $("#" + currID).val(); // Get the current user value
      var isValid = !emptyChecker(userValue) && numChecker(userValue); // Call the value checker functions to see if s-value is valid
      boxColorChanger(currID, isValid);
    });


    $("#nextPageButton").click(function() {
        var sValues = collectSValues(); // Get all the s1values from the user
        var isDistinct = $("#isDistinct").is(':checked'); // Check if the user has checked the isDistinct box
        var index = 0;
        var isValid = true;
        for (index; index < sValues.length; index++) {
          if (emptyChecker(sValues[index])) {
              var sID = 's' + String(index + 1) + 'Val'; // Pass in the value of the id that is invalid
              boxColorChanger(sID, false); // Make that box red
              isValid = false;
          }
        }

        if (!isValid) {
          return; // If something went wrong, let the user fix that first better other errors
        }

        overallChecker(sValues);

    });

});
