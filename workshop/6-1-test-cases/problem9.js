let verifyEquals = require('../../assets/verify-equals');

// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   f("hey hello morning") returns "morning"

// HINTS: 
//    - You'll need to use the split string method
//    - A for loop might be helpful

function f(str) {
    const splitStr = str.split(" ");
    let longWord = splitStr[0];

    for (let i = 0; i < splitStr.length; ++i) {
        if (splitStr[i].length > longWord.length) {
            longWord = splitStr[i];
        }
    }
    
    return longWord;
}

// Test cases, need 5
let inputs = ["hi", "hello how are you?", "this is the longest word", "so many wooooooooords", "test case number 5", "one more"];
let outputs = ["hi", "hello", "longest", "wooooooooords", "number", "more"];

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
