<template>
	<div class="tabs">
		<div class="_tabs">
			<!--{{name}}-->
			<!--********************************************-->
			<!--历史记录内容-->
			<div class="tabs_history">
				<!--今天-->
				<div class="history_today like1">
					<p class="dates">今天</p>
					<div class="today_info like2">
						<img src="../../../static/data/img/listimg/b2.jpg"/>
						<p class="description">
							<a class="title">【全明星】年少有为不肾亏</a>
							<a class="time">20:58</a>
						</p>
					</div>
				</div>
				
				<!--昨天-->
				<div class="history_yesterday like1">
					<p class="dates">昨天</p>
					<div class="yesterday_info like2">
						<img src="../../../static/data/img/listimg/b1.jpg"/>
						<p class="description">
							<a class="title">【冷面作品】《痔青春·上集》孙笑川 X 吴亦凡</a>
							<a class="time">昨天 19:58</a>
						</p>
					</div>
				</div>
				
				<!--更早-->
				<div class="history_yesterday like1">
					<p class="dates">更早</p>
					<div class="yesterday_info like2">
						<img src="../../../static/data/img/listimg/b5.jpg"/>
						<p class="description">
							<a class="title">【华农兄弟】沙漠香猪</a>
							<a class="time">2018-11-15 16:28</a>
						</p>
					</div>
					
					<div class="yesterday_info like2">
						<img src="../../../static/data/img/listimg/b8.jpg"/>
						<p class="description">
							<a class="title">【马云】空空如也</a>
							<a class="time">2018-11-15 16:27</a>
						</p>
					</div>
				</div>
				
				<!--尾部-->
				<div class="_afterbody">
					<p>哔哩哔哩 沪ICP备13002172号-3</p>
					<p>信息网络传播视听节目许可证：0910417</p>
				</div>
			</div>
			<!--***********************************************-->
			
			<!--***********************************************-->
			<!--我的投稿内容-->
			<div class="tabs_contribute" style="display: none;">
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
	</div>
</template>

<script>
	
	export default{
		name:'Tabs',//当前组件名字
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
	
	.tabs{
		position: absolute;
        width: 100%;
        height: 100%;
        background: #f4f4f4;
        ._tabs{
        	width: 100%;
        	height: 100%;
        	.padding(18,18,18,18);
        	.tabs_history{
        		width: 100%;
        		height: 100%;
        		.like1{
        			width: 100%;
        			.dates{
        				.font-size(28);
        				color:#999;
        				.margin-bottom(15);
        			}
        			.like2{
        				width: 100%;
        				.height(180);
        				display:flex;
        				img{
        					.width(234);
        					.height(145);
        					.margin-right(20);
        					.border-radius(10,10,10,10);
        				}
        				.description{
        					.font-size(28);
        					display:flex;
        					flex-direction: column;
        					.title{
        						display: inline-block;
        						.height(80);
        						overflow: hidden;
        						.margin-bottom(26);
        					}
        					.time{
        						.font-size(20);
        						color:#999;
        					}
        				}
        			}
        		}
        	}
        	
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
        	
        	.tabs_contribute{
        		width:100%;
        		.contribute_info{
        			width:100%;
        			.font-size(30);
        			text-align:center;
        		}
        	}
        	
        	
        }
	}
	
	
	
	
</style>