let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {
  let splitStr = str.split("");
  splitStr[0] = splitStr[0].toUpperCase();

  for (let i = 1; i < splitStr.length; ++i) {
    if (splitStr[i - 1] === " ") {
      splitStr[i] = splitStr[i].toUpperCase();
    }
    else {
      splitStr[i] = splitStr[i].toLowerCase();
    }
  }

  return splitStr.join("");
}

// Test cases
let inputs = ["hello world", "hi", "why not", "three words this time", "I COUNTED WRONG"];
let outputs = ["Hello World", "Hi", "Why Not", "Three Words This Time", "I Counted Wrong"];

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
