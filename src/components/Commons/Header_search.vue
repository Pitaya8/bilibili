<template>
<div id="header_search">
	<div class="left">
		<input type="text" id="input_keyword" @keyup="keyboard($event)" placeholder="搜索视频、番剧、UP主或AV号" :value="this.$store.state.keyword"/>
		<i class="fa fa-search" aria-hidden="true"></i>
	</div>
	<div class="right">
		<router-link
			to="/"
			>
			<p>取消</p>
		</router-link>
	</div>
</div>
</template>

<script>
import {setLocalStorage,getLocalStorage,getAllLocalStorage,
delteAllLocalStorage} from '../../lib/localStorage.js';
export default{
	name:"header_search",
	data(){
		return {
			
		}
	},
	methods:{
		keyboard(event){
			if (event.keyCode == "13") {
				//localStorage存入数据
				localStorage.setItem(event.currentTarget.value,event.currentTarget.value)
				
				this.$store.commit('changeKeyword',event.currentTarget.value);
				this.infos();
				this.$router.push({path:`/SearchAfter`,query:{userID:123}})
			}
		},
		//查找数据
		infos(){
			this.$axios.get('http://localhost:8080/static/data/vediolist.json',{})
			.then((response)=>{
				//当前的关键字
				let keywords=this.$store.state.keyword;
				for(let i=0;i<response.length;i++){
					if((response[i].title).indexOf(keywords)!=-1){
					}
				}
			})
			.catch((error)=>{
				console.log(error);
			})
		}
	},
	mounted(){
		if(this.$route.path=='/search'){
			$('#input_keyword').val('')
		}else if(this.$route.path=='/SearchAfter'){
			
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
#header_search{
	position:fixed;
	display:flex;
	text-align:center;
	width:100%;
	.height(108);
	background:white;
	z-index:9999;
	top:0;
	.left{
		flex:8;
		input{
			.width(618);
			.height(60);
			border-radius:0.2rem;
			background:#f4f4f4;
			text-indent:1.3rem;
		}
		i{
			.margin-top(10);
			position:absolute;
			display: inline-block;
			.font-size(44);
			.height(10);
			.width(10);
			.top(25);
			.left(55);
			color:#c8c8c8;
		}
	}
	.right{
		flex:1;
		p{
			width:100%;
			text-align:left;
			.margin-top(30);
			color:#fb7299;
			.font-size(27)
		}
		
	}
}
</style>