const eqObjects = function (object1, object2) {
    if (Object.keys(object1).length === Object.keys(object2).length) {
        for (let key of Object.keys(object1)) {
            if (Object.keys(object2).includes(key)) {
                if (object1[key] === object2[key]) {
                    //console.log(object1[key]);
    
                    return true;

                }
            }
            else {
                return false;
            }
        }
        return true;
    }
    return false;
};

const assertObjectsEqual = function (actual, expected) {
    const inspect = require(`util`).inspect;
    if (actual !== expected) {

        console.log(`Assertion Failed:  ${inspect(ab)} !== ${inspect(ba)}`);
    } else {
        console.log(`Assertion Passed:  ${inspect(ab)} === ${inspect(ba)}`);
    }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(eqObjects(ab, ba), true));
