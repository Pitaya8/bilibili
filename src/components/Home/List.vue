<template>
	<div class="home_list" 
		v-infinite-scroll="loadMore" 
		infinite-scroll-disabled="loading" 
		infinite-scroll-distance="10">
		<div class="h_list">
			<!--{{name}}-->
			<ul>
				<li v-for="(item,index) in datalist" :key="index" :name="item.id" @click="jump($event,item.id)" >
					<p class="img">
						<img :src="'../../../static/data/'+item.imgurl" />
						<span class="fa fa-caret-square-o-right watch" aria-hidden="true">{{item.watch}}万</span>
						<span class="fa fa-list video_review" aria-hidden="true">{{item.video_review}}</span>
					</p>
					<p class="title">{{item.title}}</p>
				</li>

			</ul>
		</div>

	</div>
</template>

<script>
	import Vue from 'vue';
	import { InfiniteScroll } from 'mint-ui';

import {setLocalStorage,getLocalStorage} from '../../lib/localStorage.js';
	Vue.use(InfiniteScroll);

	export default {
		name: 'List', //当前组件名字
		components: {},
		data() {
			return {
				datalist: [],//全部数据
				datalist_b:[],
				loading: false,
				num:1,
				count:6
			}
		},
		methods: {
			getHomedata() {
				//console.log(this);//this指向的是当前组件的实例
				let url = "http://localhost:8080/static/data/vediolist.json";
				this.$axios.get(url, {})
					.then((response) => {
						//console.log(response)
						this.datalist = response.slice(0,this.num*this.count);
						console.log(this.datalist)
					})
					.catch((error) => {
						console.log(error)
					});
			},
			loadMore() {
				this.loading = false;
				this.getHomedata(this.num++)
			},
			//跳转页面
			jump(event,id){
			//设置一个localstorage
				this.$store.commit('changeCount');
				setLocalStorage('use'+this.$store.state.count,id,1);
				this.$router.push({path:`/Details`,query:{userID:id}})
			}
		},
		mounted() {
//			this.getHomedata();
		}
	}
</script>

<!--scoped表示的是下面的样式代码只对这个组件有用-->
<!--lang="less"表示的是下面的样式全是less编译-->
<style lang="less" scoped>
	@import '../../styles/main.less';
	.home_list {
		width: 100%;
		.padding(0, 18, 0, 18);
		/*background:skyblue;*/
		.margin-top(20);
		overflow: hidden;
		.h_list {
			width: 100%;
			ul {
				/*display:flex;*/
				li {
					float: left;
					.width(330);
					.height(285);
					/*.padding(8,8,8,8);*/
					.margin(10, 15, 30, 12);
					.img {
						position: relative;
						img {
							.width(330);
							.height(230);
							.border-radius(15, 15, 15, 15);
						}
						.watch,
						.video_review {
							.font-size(26);
							color: #fff;
							position: absolute;
						}
						.watch {
							.bottom(10);
							.left(10);
						}
						.video_review {
							.bottom(10);
							.right(35);
						}
					}
					.title {
						.font-size(25);
						.margin-top(10);
						overflow: hidden;
						display: inline-block;
						.height(64);
					}
				}
			}
		}
	}
</style>