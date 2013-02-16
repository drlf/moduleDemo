var path = require('path'),
    forever = require('forever');


var monitor = forever.start(path.join(__dirname, 'task.js'),[]);

monitor.on('start', function () {
  forever.startServer(monitor);
  console.log('task been ...........');
});


monitor.on('end', function () {
  console.log('task been ended...........');
});

setTimeout(function(){
	forever.list(false, function (err, data) {
      if (err) {
        console.log('Error running `forever.list()`');
        console.dir(err);
      }
      
      console.log('Data returned from `forever.list()`');
      console.dir(data)
    });
},2000);



//forever.list();
//forever.stopAll();
//forever.stop();
