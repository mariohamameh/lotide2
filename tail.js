const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} equals ${[expected]}`);
  }
  if (actual !== expected) {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${[actual]} does not equal ${[expected]}`
    );
  }
};

const tail = function(bar) {
  let result = [];
  for (let i = 1; i < bar.length; i++) {
    result += bar[i];
  }
  return result;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
