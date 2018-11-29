<template>
	<div id="SearchList"
			v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="0"
		  infinite-scroll-immediate-check=false
		  infinite-scroll-listen-for-event="srcoll_event"
		>
		<div class="lists" v-for="(item,index) in arr" :key="index" @click="dispose($event,item.id)" :name="item.id">
			<div class="left">
				<img :src="'../../../static/data/'+item.imgurl" />
				<span>07:13:02</span>
			</div>
			<div class="right">
				<p class="title">{{item.title}}</p>
				<p class="little_title">
					<i class="fa fa-th"></i>&nbsp;&nbsp;杨超越视频站
				</p>
				<p class="little_text">
					<i class="fa fa-video-camera"></i>
					<span>9548</span>
				</p>
				<p class="little_text">
					<i class="fa fa-file-text-o"></i>
					<span>72</span>
				</p>
			</div>
			
		</div>
	</div>
</template>

<script>
import Vue from 'Vue';
import { InfiniteScroll } from 'mint-ui';
import { Indicator,Toast } from 'mint-ui';
Vue.use(InfiniteScroll);
import {setLocalStorage,getLocalStorage} from '../../lib/localStorage.js';
export default{
	name:"SearchAfter",
	data(){
		return {
			arr:[],	//总数据
			arrs:[],	//处理后的数据
			loading:true,
			page:1,
			count:0
		}
	},
	methods:{
		//请求数据的函数
		datas(page){ 
			let keywords=this.$store.state.keyword; //当前关键字
			this.$axios.get('http://localhost:8080/static/data/vediolist.json',{})
			.then((response)=>{
				for(let i=0;i<response.length;i++){
					if((response[i].title).indexOf(keywords)!=-1){
						this.arr.push(response[i])
					}
				}
				if(this.arr.length>10){
					this.count=5;
					this.loading=false;
					
				}else if(this.arr.length>0){
					this.count=this.arr.length;
					Toast({
						message:'加载完毕',
						position:'bottom',
						duration:1000
					})
				}else{
					this.$router.push({path:`/SearchAfter/SearchNotFound`})
				}
				this.arr=this.arr.slice(0,page*this.count);
			})
			.catch((error)=>{
				console.log(error);
			})
		},
		loadMore() {
			this.datas(++this.page)
		},
		dispose(event,id){
			//设置一个localstorage
			this.$store.commit('changeCount');
			setLocalStorage('use'+this.$store.state.count,id,1);
			this.$router.push({path:`/Details`,query:{userID:id}})
		},
		srcoll_event(){
			console.log('触发了')
		}
		
	},
	Create(){
		Indicator.open();
	},
	mounted(){
		this.datas(this.page,this.count);
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
#SearchList{
	.padding-left(25);
	.padding-right(25);
	background:rgb(244, 244, 244);
	.lists{
		overflow:hidden;
		width:100%;
		.height(182);
		.left{
			.margin-top(25);
			position:relative;
			float:left;
			.width(234);
			span{
				position: absolute;
				.font-size(10);
				color:white;
				.bottom(0);
				.right(0);
				background:rgba(0,0,0,.5);
				
			}
			img{
				.width(234);
				.height(131);
				
			}
			
		}
		.right{
			float:left;
			.height(165);
			.margin-top(5);
			.width(430);
			.margin-left(20);
			.title{
				.font-size(30);
				text-align:left;
			}
			.little_title{
				.font-size(12);
				color:#999;
				text-align:left;
				.margin-top(10);
			}
			.little_text{
				.font-size(24);
				color:#999;
				text-align:left;
				.width(150);
				display:inline-block;
				float:left;
				.margin-top(15);
			}
		}
	}
}

</style>