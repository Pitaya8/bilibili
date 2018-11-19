// 使用说明
// setLocalStorage('键','值')//存入通过键 值存入
// getLocalStorage('键',true)//参数二表示是否需要转为对象，可为空

// 设置localStorage
function setLocalStorage(key, value, date){
	
	if(typeof(value)=='string'){
		// 编码
		var data =window.btoa(value);
	}
	else{
		// 编码
		var data =window.btoa(JSON.stringify(value));
	}
	// 过期时间
// 	if( date ){
// 		var dt = new Date();
// 		dt.setDate(dt.getDate()+date);
// 		str += ";expires="+dt.toGMTString();
// 	}
	// 设置localStorage
	localStorage.setItem(key,data)
}

// 获取localStorage
function getLocalStorage(key,ifobj){
	var str=localStorage.getItem(key)
	if(str){
		var data=window.atob(str);
		if(!ifobj){
		return data;
	}
	else{
		return JSON.parse(data);
	}
	}else{
		return ''
	}
}

export{
	setLocalStorage,
	getLocalStorage
}
