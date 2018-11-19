<template>
	<div class="banner">
		<!--{{name}}-->
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		    	<div class="swiper-slide" v-for="(item,index) of imgsrc" :key="index">
		    		<img :src="item.src"/>
		    	</div>
		    </div>
			
			 <!-- 如果需要导航按钮 -->
		    <div class="swiper-button-prev"></div>
		    <div class="swiper-button-next"></div>
			
		</div>
			
	</div>
</template>

<script>
	import Swiper from 'swiper';
	
	export default{
		name:'Banner',//当前组件名字
		components:{},
		data(){
			return {
				imgsrc:[
						{src:require('../../../static/images/img/bannerimg/banner1.jpg')},
						{src:require('../../../static/images/img/bannerimg/banner2.png')},
						{src:require('../../../static/images/img/bannerimg/banner3.jpg')}
					]
			}
		},
		methods:{
			
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container', {
		      	loop: true,
				autoplay: {//自动轮播
				　　delay: 3000,
				　　disableOnInteraction: false
				}
			});
		},
		created(){
			
		}
			
	}
	
</script>

<!--scoped表示的是下面的样式代码只对这个组件有用-->
<!--lang="less"表示的是下面的样式全是less编译-->
<style lang="less" scoped>
@import '../../styles/main.less';
@import '../../../static/swiper/dist/css/swiper.min.css';
	
	.banner{
		width: 100%;
		.height(220);
		.padding(0,18,0,18);
		.margin-top(10);
		.swiper-container{
			width: 100%;
			.height(220);
			img{
				width: 100%;
				.height(220);
				.border-radius(20,20,20,20);
			}
			.swiper-button-prev,.swiper-button-next{
				.width(122);
				.height(35);
				.margin-top(1);
			}
		}
		
	}
	
	
</style>