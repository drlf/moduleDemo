var prompt = require('prompt'),
		fs = require('fs');

var fileQueryProp = [
    {
      name: 'filename', 
      required: true,
      conform: isFileExists,
      validator: /^.+\.(txt|log)$/,
      warning: '请输入正确的文件名,文件名必须以.log或.txt结尾,且必须带完整路径'
    }
  ];

var searchQueryProp = [
		{
      name: 'transCode', 
      validator: /^\d{4}$/,
      warning: '交易类型代码格式:长度为4位以内的位数字'
    },
    {
      name: 'startTime', 
      validator: /^\d{14}$/,
      conform: isData,
      warning: '日期格式:yyMMddhhmmss'
    },
    {
      name: 'endTime', 
      validator: /^\d{14}$/,  ///^\d{2}-d{2}-d{2} d{2}:d{2}:d{2}$/,
      conform: isData,
      warning: '日期格式:yyMMddhhmmss'
    },
    {
      name: 'termId', 
      validator: /^\d{1,8}$/,
      warning: '终端号格式:长度为8位以内的位数字'
    },
    {
      name: 'matchId', 
      validator: /^\d{1,15}$/,
      warning: '商户号格式:长度为15位以内的位数字'
    },
    {
      name: 'cardNo', 
      validator: /^\d{1,19}$/,
      warning: '卡号格式:长度为19位以内的位数字'
    }
  ];


function isFileExists(filename){
	if(fs.existsSync(filename))return true;
	if(fs.existsSync(__dirname + filename))return true;
	return false;
}

function isData(str){
	//console.log(Date.parse(str));
	try{
		var dt = new Date(str.substring(0,4), str.substring(4,6) -1, str.substring(6,8), str.substring(8,10), str.substring(10,12), str.substring(12,14));
		console.log(dt.toString());
	}catch(e){
		return false;
	}
	return true;
}

function inputFilenamePrompt(callback){
  prompt.start();
  prompt.get(fileQueryProp, callback);
}

function searchCondPrompt(callback){
  prompt.start();
  prompt.get(searchQueryProp, callback);
}

//inputFilenamePrompt(handleFile);
searchCondPrompt(handleSearch);
//console.log((new Date()).toTimeString());

function handleFile(err, result) {
    //if (err) { return onErr(err); }
    console.log('正在解析日志文件，请等待');
    console.log(result.filename.trim());
  }
  
function handleSearch(err, result) {
    //if (err) { return onErr(err); }
    console.log('正在解析日志文件，请等待');
    console.log(result);
  }  
