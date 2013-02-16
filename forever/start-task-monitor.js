var path = require('path'),
    forever = require('forever-monitor');


//var monitor = forever.start(path.join(__dirname, 'server.js'),[]);
var monitor = new (forever.Monitor)('server.js', {
    max: 30,
    silent: false,
    options: []
  });


  monitor.start();


monitor.on('start', function () {
  //forever.startServer(monitor);
  console.log('task been ...........');
});


monitor.on('exit', function () {
  console.log('task been exit...........');
});

monitor.on('stop', function () {
  console.log('task been stop...........');
});

monitor.on('restart', function () {
  console.log('task been restart...........');
});

setTimeout(function(){
	//monitor.kill(false);
	monitor.stop();
	//forever.stopAll('server');
	/*forever.list(false, function (err, data) {
      if (err) {
        console.log('Error running `forever.list()`');
        console.dir(err);
      }
      
      console.log('Data returned from `forever.list()`');
      console.dir(data)
    });*/
},2000);

/*
console.log('head of list');
forever.list(false, function(err, data){
	
	if(err)console.log(err);
	console.dir(data);
});
console.log('end of list');*/
//forever.stopAll();
//forever.stop();
