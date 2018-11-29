<template>
	<div class="nav">
		<!--{{name}}-->
		<div class="nav_show">
			<ul>
				<router-link tag='li' 
					to='' 
					v-for="(item,index) of navlist"  
					:class="index==now?'lis active':'lis'" 
					:key='index'>
					<span @click="listinfo(index)">{{item.name}}</span>
				</router-link>

				<li @click="btn_show" class="lis">
					<a class="fa fa-angle-down" aria-hidden="true"></a>
				</li>
			</ul>
		</div>
		

		<div class="nav_hidden" style="display: none;">
			<ul>
				<li v-for="(items,indexs) in hiddenlist">
					<template v-for="(items2,indexs2) in items">
						<a @click="info(indexs2,$event)" >{{items2}}</a>
					</template>
				</li>
				
				<li class="hidden" @click="btn_hidden">
					<a class="fa fa-angle-down" aria-hidden="true"></a>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	
	export default{
		name:'Nav',//当前组件名字
		components:{},
		data(){
			return {
				/**/
				navlist:[{name:'首页',path:'/home'},
						{name:'动画',path:'/cartoon '},
						{name:'番剧',path:'/bangumi'},
						{name:'国创',path:'/aimtron'},
						{name:'音乐',path:'/music'}
					],
				now:0,
				hiddenlist:[['首页','动画','番剧','国创','音乐','舞蹈'],
						['科技','游戏','鬼畜','娱乐','电影','电视剧'],
						['纪录片','影视','时尚','生活','广告','直播']
						//['相簿']
				]
			
			}
		},
		methods:{
			listinfo(index){
				this.now=index;
			},
			info(index,event){
				this.now=index;
				let len=document.querySelectorAll('.nav_hidden ul li a').length;
				for(let i=0;i<len;i++) {
					document.querySelectorAll('.nav_hidden ul li a')[i].setAttribute('class','');
				}
				event.currentTarget.setAttribute('class','active2');
			},
			btn_hidden(){
				document.querySelector('.nav_hidden').style.display='none';
			},
			btn_show(){
				document.querySelector('.nav_hidden').style.display='block';
			}
		}
	}
	
</script>

<!--scoped表示的是下面的样式代码只对这个组件有用-->
<!--lang="less"表示的是下面的样式全是less编译-->
<style lang="less" scoped>
@import '../../styles/main.less';

.active{
	span{
		border-bottom: 1px solid #FF1493;
		color: #fb7299 !important;
	}
}

.active2{
	border-bottom: 1px solid #FF1493;
	color: #fb7299 !important;
}

.nav{
	width:100%;
	.height(88);
	.nav_show{
		z-index:100;
		width:100%;
		.height(88);
		position:fixed;
		.top(88);
		background:white;
		.left(0);
		.padding(0,18,0,18);
		font-size:0;
		ul{
			display: flex;
			width:100%;
			.height(88);
			.lis{
				float:left;
				flex: 1;
				text-align:center;
				.height(88);
				span{
					display: inline-block;
					.font-size(28);
					color: #757575;
					.line-height(88);
				}
				.fa{
					.font-size(40);
					color: #757575;
					.line-height(88);
				}
			}
		}
	}
	
	.nav_hidden{
		z-index:100;
		width:100%;
		.height(352);
		background: white;
		position:fixed;
		.top(88);
		.left(0);
		.padding(0,18,0,18);
		font-size:0;
		.active{
			border-bottom: 1px solid #fb7299;
			color: #fb7299;
		}
		ul{
			display: flex;
			flex-direction: column;
			width:100%;
			.height(352);
			li{
				flex: 1;
				display: flex;
				.height(88);
				width:100%;
				a{
					flex: 1;
					display: inline-block;
					.font-size(28);
					.line-height(88);
					color: #757575;
					float: left;
					text-align: center;
				}
				.fa{
					.font-size(40);
					text-align: center;
				}
			}
		}
	}
	
}
	
</style>