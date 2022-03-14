const eqArrays= require('./eqArrays');

const assertArraysEqual = function(foo1, foo2) {

    if (eqArrays(foo1,foo2)===false) {
        return false;

    }
    return true;
}

module.exports = assertArraysEqual;