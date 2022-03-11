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

const assertArraysEqual = function(foo1,foo2) {

    if (eqArrays(foo1,foo2)===false) {
        return false;

    }
    return true;
}

const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        
        if (results[sentence[i]]) {
            results[sentence[i]].push(i);
        }
        else {
            results[sentence[i]] = [i];
        }
    }
    
    return results;
  };





console.log(letterPositions("hello"));

console.log(letterPositions("mario"));