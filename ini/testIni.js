var fs = require('fs')
      , ini = require('ini')

    var config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'))
    console.dir(config);
    console.log("database.user = " + config.database.user );
    
//注意，[section]一定要定格，否则可能不认这个section。
//如[database]前如果存在几个空格，则访问config.datanase.user提示不存在，要通过config.uer访问。