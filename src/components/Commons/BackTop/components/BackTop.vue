<template>
	<div class="back-top"
		v-scroll-hide='isShow'  
	    scroll-hide-distance="100"
	     v-show='isShow'
	>
		<div class="contain-box">
			<i class="fa fa-arrow-up"></i>
		</div>
	</div>
</template>

<script>
	export default{
		name:'back_top',
		data(){
			return {
				isShow:false,
				name:'123'
			}
		}
	}
	
</script>

<style lang='less' scoped>
.back-top{
	   position: fixed;
       right: 20px;
       bottom: 20px;
       border:1px solid black;
	.contain-box{
		width: 60px;
		height: 60px;
		font-size:30px;
        border-radius: 50%;
        background: #000;
        color:#fff;
        display: flex;
        justify-content: center;
        align-items:center;
	}
	&[size='small']{
		.contain-box{
		width: 40px;
		height: 40px;
		font-size:20px;
	    }
	}
	&[size='big']{
		.contain-box{
		width: 80px;
		height: 80px;
		font-size:40px;
	    }
	}
}	
</style>