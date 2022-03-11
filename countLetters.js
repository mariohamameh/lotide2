const assertEqual = function(actual, expected) {

    if(actual===expected) {
        console.log(`assertion passed: ${actual} does equal ${expected}`);
    } else {
        console.log(`assertion failed: ${actual} does not eqaul ${expected}`);
    }

};

const countLetters = function(sentence) {
    let result = {};

    sentence.split(' ').forEach(function(word) {
        result[word] = {};
        word.split('').forEach(function(letter) {
            if(!result[word][letter]) { 
                result[word][letter] = 0; 
            }
            result[word][letter]++;
        });
    });

    console.log(result);
    return result;

}

countLetters("LHL");
countLetters("Mario Hamameh");