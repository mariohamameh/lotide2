const assertEqual = function(actual, expected) {

    if(actual===expected) {
        console.log(`assertion passed: ${actual} does equal ${expected}`);
    } else {
        console.log(`assertion failed: ${actual} does not equal ${expected}`);
    }

};

const eqArrays=function(ar1,ar2) {
    if(ar1.length!==ar2.length) {
        return false;
    }
    for (let i=0;i<ar1.length;i++) {

        if (ar1[i]!==ar2[i]) {

            return false;
        }
    }
    return true;

}