<template>
	<div id="Search">
		<HeaderSearch></HeaderSearch>
		<!--<div id="SearchBody">-->
			<p class="Search_top">大家都在搜</p>
			<div id="search-recommendWords">
				<ul>
					<li v-for="(item,index) in list" @click="dispose($event)">{{item}}</li>
				</ul>
			</div>
			<div id="search-history">
				<p>历史搜索</p>
				<ul>
					<li>
						<i class="fa fa-clock-o"></i>
						<p class="search-history-li-p"  @click="dispose($event)">毒液</p>
					</li>
					<li>
						<i class="fa fa-clock-o"></i>
						<p class="search-history-li-p"  @click="dispose($event)">毒液吗</p>
					</li>
					
				</ul>
				<span>清除历史记录</span>
			</div>
		</div>
		
	<!--</div>-->
</template>

<script>
import HeaderSearch from '../Commons/Header_search.vue';
import {setLocalStorage,getLocalStorage} from '../../lib/localStorage.js';
	export default{
		name:'Search',
		components:{HeaderSearch},
		data(){ 
			return {
				list:['冷面作品','全明星','五五开','华农兄弟','暴躁林品如','马云'],
				//历史搜索的数组
				arr:[]
			}
		},
		mounted(){
			console.log(this.$store.state.count)
			for(let i=0;i<=this.$store.state.count;i++){
//				arr[]
				console.log('use'+i)
				console.log(getLocalStorage('use'+i))
			}
		},
		methods:{
			dispose(event){
				this.$store.commit('changeKeyword',event.currentTarget.innerHTML)
				this.$router.push({path:`/SearchAfter`,query:{userID:123}})
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
#Search{
	/*#SerachBody{*/
		.Search_top{
		 	.width(718);
		 	.font-size(30);
		 	text-align:left;
		 	.margin-left(30);
		 	color:#a2a2a2;
		 	.margin-top(100);
		 }
		 #search-recommendWords{
		 	.padding-left(20);
		 	ul{
		 		overflow:hidden;
		 		li{
		 			.font-size(26);
		 			border:0.02rem solid #ccc;
		 			.padding(19,24,19,24);
		 			float:left;
		 			.margin-left(17);
		 			.border-radius(60);
		 			.margin-top(17)
		 		}
		 	}
		 }
		 #search-history{
		 	border-top:0.25rem solid #f4f4f4;
		 	.margin-top(52);
		 	p{
		 		.height(92);
		 		.line-height(92);
		 		.width(718);
			 	.font-size(30);
			 	text-align:left;
			 	.margin-left(30);
			 	color:#505050;
		 	}
		 	.search-history-li-p{
		 		.height(92);
		 		.width(650);
		 		.line-height(92);
		 		
		 	}
		 	span{
				.font-size(26);
				.width(700);
				text-align:center;
				float:left;
				color:#a2a2a2
			}
		 	ul{
		 		.padding-left(25);
		 		li{
		 			.height(87);
		 			border-bottom:0.02rem solid #f4f4f4;
		 			i{
		 				.font-size(40);
		 				color:#a2a2a2;
		 				float:left;
		 				.margin-top(25);
		 				.margin-left(10);
		 			}
		 			p{
		 				display:inline-block;
		 				float:left;
		 				.width(500);
		 				color:black;
		 				
		 			}
		 			
		 		}
		 	}
		 }
	/*}*/
	 
}
</style>