let verifyEquals = require('../../assets/verify-equals');

// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function f(str) {
    const splitStr = str.split("");
    const reverseStr = splitStr.slice();
    reverseStr.reverse();
    let palindrome;

    for (let i = 0; i < splitStr.length; ++i) {
        if (splitStr[i] === reverseStr[i]) {
            palindrome = true;
        }
        else {
            return false;
        }
    }

    return palindrome;
}

// Test cases
let inputs = ["racecar", "poop", "palindrome", "yes", "did"];
let outputs = [true, true, false, false, true];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
