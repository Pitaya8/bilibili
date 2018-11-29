<template>
	<div class="home">
		<Header></Header>
		<Nav></Nav>
		<Banner></Banner>
		<List></List>
		
		<div class="_afterbody">
			<p>哔哩哔哩 沪ICP备13002172号-3</p>
			<p>信息网络传播视听节目许可证：0910417</p>
		</div>
		
	</div>
</template>

<script>
	import Header from '../Commons/Header';//引入头部组件
	import Nav from '../Commons/Nav';//引入导航栏组件
	import Banner from './Banner';//引入轮播图组件
	import List from './List'//引入列表部分组件
	
	
	export default{
		name:'Home',//当前组件名字
		components:{
			//注册组件
			Header,
			Nav,
			Banner,
			List
		},
		data(){
			return {
				name:'主页'
			}
		}
	}
	
</script>

<!--scoped表示的是下面的样式代码只对这个组件有用-->
<!--lang="less"表示的是下面的样式全是less编译-->
<style lang="less" scoped>
@import '../../styles/main.less';
	
	._afterbody{
		width:100%;
		.height(200);
		text-align:center;
		.margin-top(60);
		p{
			.font-size(25);
			color:#999;
			.margin-top(20);
		}
	}
	
</style>