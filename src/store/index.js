import Vue from 'vue'
import Vuex from 'vuex'  //引入vuex
Vue.use(Vuex)

//抛出vuex的实例
export default new Vuex.Store({
	//vue的变量
	state:{
		keyword:'',
		count:0,
		start:true,
		sliderShow:false,
		logstate:false
	},
	mutations:{
		changeKeyword(state,item){
			state.keyword=item
		},
		changeCount(state,count){
			state.count++
		},
		changeStart(state,val1){
			state.start=val1
		},
		changeSliderShow(state,val){
			state.sliderShow=val
		},
		changeLogState(state,loged){
			state.logstate=loged
		}
	}
})

