var forever = require('forever-monitor');

  var child = new (forever.Monitor)('task.js', {
    max: 3,
    silent: false,
    options: []
  });

  child.on('exit', function () {
    console.log('task.js has exited after 3 restarts');
  });

  child.start();