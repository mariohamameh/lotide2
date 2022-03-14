const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe("#middle", () => {

    it ("returns [2, 3] for [1, 2, 3, 4]",() => {
        assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
    });
    it ("returns [3, 4] for [1, 2, 3, 4, 5, 6]",() => {
        assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
    });
    it ("returns [7] for [1, 2, 3, 7, 4, 5, 6]",() => {
        assert.deepEqual(middle([1, 2, 3, 7, 4, 5, 6]),[7]);
    });

});