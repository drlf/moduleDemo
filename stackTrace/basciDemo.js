var stackTrace = require('stack-trace');
var util = require('util');

function testBasic(){
var err = new Error('something went wrong');
  var trace = stackTrace.parse(err);
//console.log(util.inspect(trace, true, null));
  //assert.strictEqual(trace[0].getFileName(), __filename);
  //assert.strictEqual(trace[0].getFunctionName(), 'testBasic');
  console.log(trace[0].getFileName());
  console.log(trace[0].getFunctionName());
  console.log(trace);
}

testBasic();