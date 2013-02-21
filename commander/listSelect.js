var program = require('commander');

var list = ['tobi', 'loki', 'jane', 'manny', 'luna'];

console.log('Choose the coolest pet:');
program.choose(list, function(i){
  console.log('you chose %d "%s"', i, list[i]);
});