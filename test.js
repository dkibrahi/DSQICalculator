import { findSValue, emptyChecker } from './main.js'

// run tests 

var main = function() {
    findSValueTest1();
    findSValueTest2();
    emptyTest1();
    emptyTest2();
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

var findSValueTest1 = function() {
    var functionResult = findSValue('s3');
    var expectedResult = ['s3Val', 2];

    checkArray(functionResult, expectedResult);
}

var findSValueTest2 = function() {
    var functionResult = findSValue('d3');
    var expectedResult = ['d1Val', 7];

    checkArray(functionResult, expectedResult);
}


// Testing the empty checker 

var emptyTest1 = function() {
    var actual = emptyChecker('abc');

    if (!actual) {
        console.log("Passed"); // test for non-empty paramater
    }

    else {
        alert("FAILED! emptyTest1");
    }

}

var emptyTest2 = function() {
    var actual = emptyChecker('');

    if (actual) {
        console.log("Passed"); // empty paramater
    }

    else {
        alert("FAILED! emptyTest2");
    }

}


main();

