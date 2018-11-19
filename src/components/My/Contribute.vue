<template>
	<div class="contribute">
		<!--{{name}}-->
		<!--***********************************************-->
		<!--我的投稿内容-->
		<div class="_contribute">
			<div class="contribute_info">
				加载中......
			</div>
			<!--尾部-->
			<div class="_afterbody">
				<p>哔哩哔哩 沪ICP备13002172号-3</p>
				<p>信息网络传播视听节目许可证：0910417</p>
			</div>
		</div>
		<!--**********************************************-->
	</div>
</template>

<script>
	
	export default{
		name:'Contribute',//当前组件名字
		components:{},
		data(){
			return {
				name:"我是子路由"
			}
		}
	}
	
</script>

<!--scoped表示的是下面的样式代码只对这个组件有用-->
<!--lang="less"表示的是下面的样式全是less编译-->
<style lang="less" scoped>
@import '../../styles/main.less';
	
	.contribute{
		position: absolute;
        width: 100%;
        height: 100%;
        background: #f4f4f4;
        ._contribute{
        	width: 100%;
        	height: 100%;
        	.padding(18,18,18,18);
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
        	
    		.contribute_info{
    			width:100%;
    			.font-size(30);
    			text-align:center;
    		}
        	
        }
	}
	
</style>