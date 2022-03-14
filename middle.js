const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
    let result = [];
    if (array.length <= 2) {
        return result ;

    }
    let i = array.length/2;
    
    if ((array.length%2)===0) {            
        result.push(array[i-1]);
        result.push(array[i]); 
 
        return result;      
    }
    else {  
        result.push(array[Math.floor(i)]);
        return result;
    } 
}

module.exports = middle;