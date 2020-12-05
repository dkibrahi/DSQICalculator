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

    function collectSValues() {
        var s1Value = $("#s1").val();
        var s2Value = $("#s2").val();
        var s3Value = $("#s3").val();
        var s4Value = $("#s4").val();
        var s5Value = $("#s5").val();
        var s6Value = $("#s6").val();
        var s7Value = $("#s7").val();
        return [s1Value, s2Value, s3Value, s4Value, s5Value, s6Value, s7Value];
    }


    // Event Functions

    $("#s1Help").click(function() {
        $("#s1Help").append("<div id = 's1Information'></div>");
        $("#s1Information").append("<ul id = 's1UL'></ul>");
        var index = 0;
        for (index; index < sValueRules[0].length; index++) {
            $("#s1UL").append("<li> " + sValueRules[0][index] + " </li>"); // Output all the rules for that s value
        }

    });


    $("#nextPageButton").click(function() {
        var sValues = collectSValues(); // Get all the s1values from the user
        var isDistinct = $("#isDistinct").is(':checked'); // Check if the user has checked the isDistinct box
    });


});
