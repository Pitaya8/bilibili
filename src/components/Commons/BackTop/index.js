import BackTop from './components/BackTop';  //引入组件

let  scrollEvent=function(distance,vnode){
	console.log(111)
	let bodyDistance=document.documentElement.scrollTop// 获取当前位置
	   //根据距离修改显示隐藏
	console.log(bodyDistance)
  	if (bodyDistance>=distance) {
  		if (vnode.context.isShow==false) {
  			vnode.context.isShow=true
  		}
  		
  	}else{
  		if (vnode.context.isShow) {
  			vnode.context.isShow=false
  		}
  		
  	}
}

export default{
	install(Vue){
		Vue.component('back-top',BackTop);
		//创建自定义指令
		Vue.directive('scroll-hide',{
            bind(el,binding,vnode){
        		vnode.context.isShow=true;
        		let distance=el.getAttribute('scroll-hide-distance');//获取设定的阈值

        		window.addEventListener('scroll',()=>{
        			
        			let distanceBody=document.documentElement.scrollTop;
					if(distance<=distanceBody){
						if(vnode.context.isShow==false){
							vnode.context.isShow=true;
						}
					}else{
						if(vnode.context.isShow==true){
							vnode.context.isShow=false;
						}
						
					}
        		})
       		}
		})
	}
}
