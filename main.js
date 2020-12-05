$(document).ready(function() {
    // ALL CODE GOES IN HERE

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

    $("#nextPageButton").click(function() {
        var sValues = collectSValues(); // Get all the s1values from the user
        var isDistinct = $("#isDistinct").is(':checked'); // Check if the user has checked the isDistinct box
    });


});
