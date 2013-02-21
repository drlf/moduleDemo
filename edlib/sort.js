

//对象内部属性排序，返回排序后的对象
function objectPropSort(o) {
	var sorted = {},
	key, a = [];

	for (key in o) {
		if (o.hasOwnProperty(key)) {
				a.push(key);
		}
	}

	a.sort();

	for (key = 0; key < a.length; key++) {
		sorted[a[key]] = o[a[key]];
	}
	return sorted;
};

//对数组中的对象排序，排序的依据是对象中的某个prop
//更复杂的排序有underScore实现
function objectArraySort(objArr, propName){
	var sorted = [], key, a=[];
	objArr.forEach(function(obj){
		a.push(obj[propName]);
	});
	a.sort();
	for (key = 0; key < a.length; key++) {
		var obj = findObjectByPropNameInArray(objArr, propName, a[key]);
		sorted[key] = obj;
	}
	return sorted;
}

//在对象数组中按对象的某个属性值，查找对象，返回找到的对象。
//为空则表示未找到
function findObjectByPropNameInArray(objArray, propName, expectValue){
	var result, obj;
	for(var i=0; i<objArray.length; i++){
		obj = objArray[i];
		if(obj[propName] && obj[propName] == expectValue)return obj;
	}
	return null;
}

//var objArray = [{"index":"1","fieldId":"0","startPos":"1","expect":"0100"},{"index":"2","fieldId":"3","startPos":"1","expect":"03"},{"index":"3","fieldId":"25","startPos":"1","expect":"06"}];
var objArray = [{"index":"2","fieldId":"3","startPos":"1","expect":"03"},{"index":"3","fieldId":"25","startPos":"1","expect":"06"},{"index":"1","fieldId":"0","startPos":"1","expect":"0100"}];
objectArraySort(objArray, 'index');
/*objArray.forEach(function(o){
	console.log(o.index);
});*/