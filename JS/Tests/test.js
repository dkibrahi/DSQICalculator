import { findSValue, emptyChecker } from '../Code/main.js'
import { overallChecker } from '../Code/functions.js'

// run tests 

var main = function() {
    findSValueTest1();
    findSValueTest2();
    emptyTest1();
    emptyTest2();
    //noNegativeWValuesTest();
    //sumSmallerThan100Test();
    //sumLargerThan100Test();
}

// Testing the finding of s-values 

var checkArray = function(actual, expected) {
    if (actual.length != expected.length) {
        alert("FAILED! findSValueTest1. Different lengths");
    }

    for (var i = 0; i < actual.length; i++) {
        if (actual[i] != expected[i]) {
            alert("FAILED! findSValueTest1. Different values");
        }
    }

    console.log("Passed");
}

// test if correct s-value name and index in s-rules array is foudn

var findSValueTest1 = function() {
    var functionResult = findSValue('s3');
    var expectedResult = ['s3Val', 2];

    checkArray(functionResult, expectedResult);
}

// edge case where d-value needs to be returned 

var findSValueTest2 = function() {
    var functionResult = findSValue('d3');
    var expectedResult = ['d1Val', 7];

    checkArray(functionResult, expectedResult);
}


// test to make sure non-empty values aren't counted as empty 

var emptyTest1 = function() {
    var actual = emptyChecker('abc');

    if (!actual) {
        console.log("Passed"); // test for non-empty paramater
    }

    else {
        alert("FAILED! emptyTest1");
    }

}

// test to make sure empty values are picked up

var emptyTest2 = function() {
    var actual = emptyChecker('');

    if (actual) {
        console.log("Passed"); // empty paramater
    }

    else {
        alert("FAILED! emptyTest2");
    }

}

// test to make sure negative w-values aren't accepted (only use during testing, not during live dev)

var noNegativeWValuesTest = function() {
    var testArr = ['-10', '10', '100', '0', '0', '0'];

    var expected = false;
    var actual = overallChecker(testArr);

    if (actual != expected) {
        alert("FAILED! noNegativeWValuesTest! This should return false, but didn't!");
    }

    else {
        console.log("Passed");  
    }
}

// test to make sure sums smaller than 100 aren't accepted (only use during testing, not during live dev)

var sumSmallerThan100Test = function() {
    var testArr = ['0', '0', '99', '0.1', '0', '0'];

    var expected = false;
    var actual = overallChecker(testArr);

    if (actual != expected) {
        alert("FAILED! sumSmallerThan100Test! This should return false, but didn't!");
    }

    else {
        console.log("Passed");  
    }
}

// test to make sure sums larger than 100 aren't accepted (only use during testing, not during live dev)

var sumLargerThan100Test = function() {
    var testArr = ['0', '0', '100', '0.1', '0', '0'];

    var expected = false;
    var actual = overallChecker(testArr);

    if (actual != expected) {
        alert("FAILED! sumLargerThan100Test! This should return false, but didn't!");
    }

    else {
        console.log("Passed");  
    }
}

main();

