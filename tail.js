const assertEqual = require('./assertEqual');

const tail = function(bar) {
  let result = [];
  for (let i = 1; i < bar.length; i++) {
    result += bar[i];
  }
  return result;
};



module.exports = tail;