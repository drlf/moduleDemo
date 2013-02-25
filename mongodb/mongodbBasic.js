var Db = require('mongodb').Db
  , Connection = require('mongodb').Connection
  , Server = require('mongodb').Server
  , assert = require('assert')
  , format = require('util').format;
  
  var client = new Db('test', new Server("127.0.0.1", 27017, {}), {w: 1}),
        test = function (err, collection) {
        	
          collection.insert({a:2}, function(err, docs) {

            collection.count(function(err, count) {
              test.assertEquals(1, count);
            });

            // Locate all the entries using find
            collection.find().toArray(function(err, results) {
              test.assertEquals(1, results.length);
              test.assertTrue(results[0].a === 2);

              // Let's close the db
              client.close();
            });
          });
        };
        
			test.assertEquals= function(src, dest){
    		return assert.equal(src, dest);
    	};
    	test.assertTrue= function(src, dest){
    		return assert.assert(src);
    	}        

    client.open(function(err, p_client) {
    	p_client.on("close", function(error){
		    console.log("..................Connection to the database was closed!");
		});
      client.collection('test_insert', test);
    });
    
    