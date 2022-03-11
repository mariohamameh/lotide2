const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed: ${actual} does equal ${expected}`);
  } else {
    console.log(`assertion failed: ${actual} does not equal ${expected}`);
  }
};
const eqArrays = function (ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function (foo1, foo2) {
  if (eqArrays(foo1, foo2) === false) {
    return false;
  }
  return true;
};

const takeUntil = function (array, callback) {
  let result = [];
  for (let item of array) {
    let conditionMet = callback(item);
    if (!conditionMet) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
