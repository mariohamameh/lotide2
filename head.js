const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${[actual]} equals ${[expected]}`);
    }
    if (actual !== expected) {
        console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} does not equal ${[expected]}`);
    }
};

const head = function(foo) {
    return foo[0];
    
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");