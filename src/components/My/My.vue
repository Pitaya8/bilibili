<template>
	<div class="my">
		<!--头部-->
		<Header></Header>
		
		<!--注册登录-->
		<div class="my_reg_log">
			<!--{{name}}-->
			<img src="../../../static/images/img/bannerTop.png"/>
			<router-link to="/reg" class="my_reg bt">
				注册
			</router-link>
			<router-link to="/log" class="my_log bt">
				登录
			</router-link>
			
		</div>
		
		<!--历史记录和投稿-->
		<div class="my_tab">
			<ul class="tabli">
				<router-link :to="aa" tag="li"
					:class="index==now?'_li active':'_li'"
					v-for="(item,index) of tablist"
					:key="index">
					<span @click="change(index)">{{item}}</span>
				</router-link >
			</ul>
		</div>
		
		<router-view></router-view>
		
	</div>
</template>

<script>
	import Header from '../Commons/Header';//引入头部组件
	
	export default{
		name:'My',//当前组件名字
		components:{
			Header
		},
		data(){
			return {
				tablist:['历史记录','我的投稿'],
				now:0,
				aa:'/my/contribute'
				//linkActiveClass:'active'
			}
		},
		methods:{
			change(index){
				this.now=index;
				//console.log(index)
				
				this.$store.commit('changeStart',!this.$store.state.start);
				this.aa=(this.$store.state.start)?'/my/tabs':'/my/contribute';
//				console.log(aa)
//				this.$router.push(`"${aa}"`)
			}
		},
		created(){
//			console.log(this.$store.state.start)
//			if (this.$store.state.start) {
//				
				this.$router.replace('/my/tabs')
//			}else{
//				this.$router.replace('/my/contribute')
//			}
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
		img{
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