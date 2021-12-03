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

// Overall value checker

function overallChecker(wValues) {
  var currInvalid = true; // Temporary variable used to track if current w values have errors
  var isValid = true; // Bool to track if any errors were encountered
  var total = 0; // Store weight sum
  var numWVal = 0; // convert w val to a number
  var wID = ""; // keep track of the ID val for each weight

  if (wValues.length != 6) {
      alert("Something went wrong. Please go back to the main page and try again.");
      isValid = false;
  }

  var currWVal = 0; // store the current w value
  for (var index = 0; index < wValues.length; index++) {
    currInvalid = true;
    currWVal = wValues[index];
    numWVal = Number(currWVal);
    wID = 'w' + String(index + 1) + 'Val';
    if (currWVal == '') {
        currInvalid = false; // If the value is empty, alert the user
        swal("Error!", "W" + String(index + 1) + " cannot be empty and can only use numbers between 0-100!", "error");
    }

    else if (numWVal < 0) {
      swal("Error!", "W" + String(index + 1) + " cannot be negative!", "error");
      currInvalid = false; // If the value isn't a positive number, then alert the use
    }

    else if (numWVal.toString() != currWVal) {
      swal("Error!", "W" + String(index + 1) + " can only contain digits between 0-9!", "error");
      currInvalid = false; // If the value contains any special characters, then when it is converted to an integer it will get picked up
    }

    if (!currInvalid) {
      boxColorChanger(wID, false); // Make that box red
      isValid = false;
    }

    else {
      total += numWVal;
      boxColorChanger(wID, true); // Make sure the box isn't red
    }


  }


  if (isValid && total != 100) {
      swal("Error!", "The sum of the weights must be 100%!", "error");
      isValid = false;
  }

  return isValid;

}

export { collectSValues, boxColorChanger, overallChecker };