var nconf = require('nconf');

  nconf.use('file', { file: './config.json' });
  nconf.load();
  nconf.set('name', 'Avian');
  nconf.set('dessert:name', 'Ice Cream');
  nconf.set('dessert:flavor', 'chocolate');

  console.log(nconf.get('dessert'));

  nconf.save(function (err) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Configuration saved successfully.');
  });
  //ΩÈ…‹ http://docs.nodejitsu.com/articles/file-system/how-to-store-local-config-data