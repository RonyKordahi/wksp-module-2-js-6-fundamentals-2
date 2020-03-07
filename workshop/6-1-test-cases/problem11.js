let verifyEquals = require('../../assets/verify-equals');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {
    let sum = 0;
    if (arr.length === 0) {
        return 0;
    }
    else {
        
        for (let i = 0; i < arr.length; ++i) {
            if (isNaN(arr[i])) {
                //nothing is done here
            }
            else {
                sum += arr[i];
            }
        }

        return sum;
    }
}

// Test cases
let inputs = [[1, 2, 3], [4, 5, 6], [1, 11], [0, 5], [-1, 2]];
let outputs = [6, 15, 12, 5, 1];

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
