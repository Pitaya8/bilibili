<template>
	<div id="notFound">
		<img src="../../../static/images/notFound.png"/>
		<p>什么都没有找到啊 T_T</p>
	</div>
</template>

<script>
	export default{
		name:"notFound",
		data(){
			return {
				screenWidth:0
			}
		},
		methods:{
			
		},
		mounted(){
			let ScreenWidth=window.screen.width;
			notFound.style.width=ScreenWidth+'px';
		}
	}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
#notFound{
	text-align:center;
	p{
	    text-align: center;
	    color: #757575;
	    .font-size(60);
	    .line-height(60);
	    width:100%;
	}
	img{
		width:100%;
	}
}
</style>