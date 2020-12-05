$(document).ready(function() {
    // ALL CODE GOES IN HERE
    var sValueRules = [
      [
        'S1 represents the total number of modules',
        'S1 cannot be a negative number or 0',
        'S1 must be greater than S2, S3, and S7'
      ]
    ]; // Store rules that each s value must abide by

    // Functions

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


    // Event Functions

    $(".sHelp").click(function() {
        var sID = String(($(this).attr('id'))); // Get the specific sID
        var sInfo = findSValue(sID);

        sID = sInfo[0]; // Get new value HTML should be appended to
        var messageNumber = sInfo[1]; // Get the index value to access the appripriate message in the sValueRules arrary

        $("#" + sID).after("<div class = 'sInformation' id = '" + sID + "Information'></div>");
        $("#" + sID + "Information").append("<ul id = '" + sID + "UL'></ul>");

        var index = 0;
        for (index; index < sValueRules[messageNumber].length; index++) {
            $("#" + sID + "UL").append("<li> " + sValueRules[messageNumber][index] + " </li>"); // Output all the rules for that s value
        }

        $("#" + sID + "Information").toggle(); // Toggle between opening and closing the div

        var isHidden = document.getElementById(sID + 'Information').style.display; // Check to see if the modal is hidden
        if (isHidden != 'block') {
            $("#" + sID + "Information").remove(); // As the user toggles through, remove the previous div so you don't have multiple copies
        }

    });


    $("#nextPageButton").click(function() {
        var sValues = collectSValues(); // Get all the s1values from the user
        var isDistinct = $("#isDistinct").is(':checked'); // Check if the user has checked the isDistinct box
    });


});
