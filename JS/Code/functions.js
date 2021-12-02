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

// Change color of box if it isn't valid

function boxColorChanger(elementID, isValid) {
  if (!isValid) {
    $('#' + elementID).css('border-color', 'red');
  }

  else {
    $('#' + elementID).css('border-color', ""); // If the value is valid, then keep the box its regular color
  }
}

export { collectSValues, boxColorChanger };