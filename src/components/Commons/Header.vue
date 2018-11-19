<template>
	<div class="header">
		<!--{{name}}-->
		<header>
			<div class="header_left">
				 <!-- 使用 router-link 组件来导航. -->
			    <!-- 通过传入 `to` 属性指定链接. -->
			    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
			    <router-link to="/" class="a_logo">
					<img src="../../../static/images/headerimg/logo.png"/>
				</router-link>
			</div>
			
			<div class="header_right">
				<router-link to="/search" class="header_search">
					<img src="../../../static/images/headerimg/search.png"/>
				</router-link>
				
				<router-link to="/my" class="header_icon">
					<img src="../../../static/images/headerimg/icon.png"/>
				</router-link>
				
				<a class="header_load"><i>下载App</i></a>
			</div>
		</header>
		
	</div>
</template>

<script>
	export default{
		name:'Header',//当前组件名字
		components:{},
		data(){
			return {
				name:'头部'
			}
		}
	}
	
</script>

<!--scoped表示的是下面的样式代码只对这个组件有用-->
<!--lang="less"表示的是下面的样式全是less编译-->
<style lang="less" scoped>
@import '../../styles/main.less';
.header{
	width:100%;
	.height(88);
	header{
		width:100%;
		.height(88);
		z-index:100;
		background:white;
		/*background:@bg-color;*/
		.font-size(0);
		position:fixed;
		.top(0);
		.left(0);
		display: flex;
		.padding(0,18,0,18);
		.header_left{
			flex: 3;
			.padding(10,0,0,0);
			.a_logo{
				img{
					.width(130);
					.height(65);
				}
			}
		}
		.header_right{
			flex: 3;
			display: flex;
			.padding(18,0,0,0);
			.header_search{
				flex: 2;
				text-align: center;
				img{
					.width(48);
					.height(48);
				}
			}
			.header_icon{
				flex: 1;
				img{
					.width(52);
					.height(52);
				}
			}
			.header_load{
				flex: 3;
				text-align: center;
				i{
					.font-size(25);
					display: inline-block;
					background: #fb7299;
					color: white;
					.width(160);
					.height(50);
					text-align: center;
					.padding-top(8);
					.border-radius(10,10,10,10);
				}
			}
		}
		a{
			display: inline-block;
		}
		
	}	
}	
	
</style>