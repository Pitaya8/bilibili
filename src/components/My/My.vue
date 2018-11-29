<template>
	<div class="my">
		<!--头部-->
		<Header></Header>
		
		<!--注册登录-->
		<div class="my_reg_log">
			<!--{{name}}-->
			<img src="" class="pic" v-show="isShowpic"/>
			<img src="../../../static/images/img/bannerTop.png" class="bac"/>
			<router-link to="/reg" class="my_reg bt">
				注册
			</router-link>
			<a class="my_log bt">
				<span @click="Changes">登录</span>
			</a>
			
		</div>
		
		<!--历史记录和投稿-->
		<div class="my_tab">
			<ul class="tabli">
				<router-link :to="item.path" tag="li"
					active-class="active" 
					class="_li"
					v-for="(item,index) of tablist"
					:key="index">
					<span>{{item.title}}</span>
				</router-link >
				
				<!--<router-link :to="aa" tag="li"
					:class="index==now?'_li active':'_li'" 
					v-for="(item,index) of tablist"
					:key="index">
					<span>{{item}}</span>
				</router-link >-->
			</ul>
		</div>
		
		<router-view></router-view>
		
	</div>
</template>

<script>
	import Header from '../Commons/Header';//引入头部组件
	
	import { Toast } from 'mint-ui';
	export default{
		name:'My',//当前组件名字
		components:{
			Header
		},
		data(){
			return {
				tablist:[
					{title:'历史记录',path:'/my/tabs'},
					{title:'我的投稿',path:'/my/contribute'}
				],
				now:0,
				isShowpic:false
			}
		},
		methods:{
			Changes(){
				let vals = document.querySelector('.my_log span').innerHTML;
				//console.log(vals)
				if (vals=='退出') {
					Toast('已退出，请重新登录');
					let exit=!this.$store.state.logstate;
					this.$store.commit('changeLogState',exit);
					//console.log(exit);
					this.isShowpic=!this.isShowpic;
					$('.my_reg').html('注册');
					$('.my_log span').html('登录');
					$('.header_icon img').attr('src','../../../static/images/headerimg/icon.png')
				}else if(vals=='登录'){
					window.location.href='#/log'
				}
			}
			
		},
		created(){
			this.$router.replace('/my/tabs')
		},
		mounted(){
			let storage=window.localStorage;
			let succeed_id=storage.getItem('succeed_id');
			//console.log(succeed_id);
			
			//console.log(this.$store.state.logstate);//从登录页面传过来的，登录成功后状态值为true
			if (this.$store.state.logstate==true) {
				this.isShowpic=!this.isShowpic;
				$('.my_reg_log .pic').attr('src','../../../static/images/headerimg/log.jpg');
				$('.my_reg').html('设置');
				$('.my_log span').html('退出');
			}
			
		}
		
	}
	
</script>

<!--scoped表示的是下面的样式代码只对这个组件有用-->
<!--lang="less"表示的是下面的样式全是less编译-->
<style lang="less" scoped>
@import '../../styles/main.less';
	
	.my_reg_log{
		width:100%;
		.height(260);
		position:relative;
		.pic{
			position:absolute;
			.width(135);
			.height(100);
			border-radius:50%;
			.left(300);
			.top(10);
		}
		.bac{
			width:100%;
			.height(260);
		}
		.bt{
			display:inline-block;
			.width(144);
			.height(57);
			.font-size(28);
			text-align:center;
			.line-height(57);
			.border-radius(10,10,10,10);
			position:absolute;
			.bottom(75);
		}
		.my_reg{
			color:#fb7299;
			background:white;
			.left(180);
		}
		.my_log{
			color:white;
			background:#fb7299;
			.right(180);
		}
	}
	
	
	.active{
		color:#fb7299 !important;
		.border-bottom(3,solid,#fb7299);
		.margin-bottom(5);
	}
	.my_tab{
		width:100%;
		.tabli{
			width:100%;
			.height(75);
			/*background:#ccc;*/
			display:flex;
			.border-bottom(1,solid,#979797);
			._li{
				flex:1;
				.font-size(28);
				color:#666;
				text-align:center;
				.line-height(75);
				span{
					display:inline-block;
					width:100%;
					.height(75);
				}
			}
		}
		
	}
	
</style>