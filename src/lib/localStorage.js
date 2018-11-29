// 使用说明
// setLocalStorage('键','值')//存入通过键 值存入
// getLocalStorage('键',true)//参数二表示是否需要转为对象，可为空

// 设置localStorage
function setLocalStorage(key, value){
//	if(typeof(value)=='string'){
		// 编码
//		var data =window.btoa(value);
//	}
//	else{
		// 编码
//		var data =window.btoa(JSON.stringify(value));
//	}
	// 过期时间
// 	if( date ){
// 		var dt = new Date();
// 		dt.setDate(dt.getDate()+date);
// 		str += ";expires="+dt.toGMTString();
// 	}
	// 设置localStorage
	var data =value;
	return localStorage.setItem(key,value)
}

// 获取localStorage
function getLocalStorage(key){
	var str=localStorage.getItem(key)
	if(str!=null){
//		var data=window.atob(str);
		return data;
	}else{
		return false;
	}
}

//获取所有的localStorage
function getAllLocalStorage(){
	let localStorages=localStorage;
	return localStorages;
}

//删除某个localStorage
function deleteLocalStorage(key){
	localStorage.removeItem(key);
	if(getLocalStorage(key)){
		return true;
	}
}

//删除所有localStorage
function delteAllLocalStorage(){
	localStorage.clear()
}

export{
	setLocalStorage,
	getLocalStorage,
	getAllLocalStorage,
	delteAllLocalStorage
}
