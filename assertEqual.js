const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${[actual]} equals ${[expected]}`);
    }
    if (actual !== expected) {
        console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} does not equal ${[expected]}`);
    }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);