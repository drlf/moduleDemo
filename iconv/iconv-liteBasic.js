var iconv = require('iconv-lite');
var http = require('http');
var urlget = require('../edlib/httputil').urlget;

var url = 'http://www.ttmeishi.com/BaiKe/shenghuo/7479.html';
//var url = 'http://127.0.0.1/main.html';
urlget(url,function(err,res){
	//console.log(res.body.toString('ascii'));
	str = iconv.decode(res.body, 'GBK');
	p(str);
})

/*
//var buffer = require('buffer');

var buf = new Buffer("广泛发动过");

//var buf = new buffer('klsfdjlksdj');
// Convert from an encoded buffer to string.
*/
//str = iconv.decode(buf, 'win1251');
//p(str);

// Convert from string to an encoded buffer.
//buf = iconv.encode("Sample input string", 'win1251');
//p(buf);
function p(str){
	console.log(str);
}
