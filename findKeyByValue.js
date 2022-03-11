const assertEqual = function(actual, expected) {

    if(actual===expected) {
        console.log(`assertion passed: ${actual} does equal ${expected}`);
    } else {
        console.log(`assertion failed: ${actual} does not equal ${expected}`);
    }

};

const findKeyByValue  = (obj,value) => {
    for (const objKey in obj) {
      if (obj[objKey] === value) {
        return objKey;
      }
    }
  };

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);