<template>
	<div id="Details">
		<Header></Header>
		<div id="DetailsBody">
			<div class="DetailsBody_movie">
				<video>
					<source src="../../../static/video/video.mp4" type="video/mp4"></source>
					<object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
						<param name="movie" value="myvideo.swf" />
						<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
					</object>
					当前浏览器不支持 video直接播放，点击这里下载视频： 
					<a href="myvideo.webm">下载视频</a>
				</video>
			</div>
			
			<div class="open_app">
				<input type="button" value="高清更流畅，App内打开观看" />
			</div>
			
			<div class="produce">
				<div class="big_title">
					<p class="big_title_txt">
						{{this.infos.title}}
						<!--全身出境！电影《毒液：致命守护者》第
						二支全新预告片来了！舌头长到可以去直播！-->
					</p>
					<i :class="className" @click='trans' v-model="pan"></i>
					 <!--class="fa fa-angle-up"-->
				</div>
				<div class="little_title">
					<a href="https://m.bilibili.com/space/103927948">
						看电影咨询
					</a>
					<span>{{this.infos.watch}}万次观看</span>
					<span>{{this.infos.video_review}}弹幕</span>
					<span>7-31</span>
				</div>
				
				
				<transition 
					 name="custom-classes-transition"
				     enter-active-class="animated slideInLeft"
					>
				<div class="infos" v-show="pan">
					<p>
						{{this.infos.title}}
					</p>
					<p>
						<span>主页</span>
						>
						<span>影视</span>
						>
						<span>预告&nbsp;资讯</span>
						>
						av28203280
					</p>
					<ul>
						<li>超级英雄</li>
						<li>漫威</li>
						<li>毒液</li>
						<li>漫改电影</li>
						<li>好莱坞电影</li>
						<li>反派英雄</li>
					</ul>
					<ol>
						<li>
							<i class="fa fa-star"></i>
							<span>收藏</span>
						</li>
						<li>
							<i class="fa fa-arrow-circle-o-down"></i>
							<span>缓存</span>
						</li>
						<li>
							<i class="fa fa-share"></i>
							<span>分享</span>
						</li>
					</ol>
				</div>
				</transition>
				
			</div>
		
			<div class="DetailsBigBody"
				v-infinite-scroll="loadMore"
				  infinite-scroll-disabled="loading"
				  infinite-scroll-distance="0"
				>
				<div class="DetailsBigBody_content" v-for="(item,index) in arr" :key="index">
					<div class="left">
						<img :src="'../../../static/data/'+item.imgurl" />
						<span>07:13:02</span>
					</div>
					
					<div class="right">
						<p class="title">{{item.title}}</p>
						<p class="little_title">
							<i class="fa fa-th"></i>&nbsp;&nbsp;杨超越视频站
						</p>
						
						<input type="button" value="App内打开"/>
					</div>
				</div>
			</div>
		</div>
		
		<div class="_afterbody">
			<p>哔哩哔哩 沪ICP备13002172号-3</p>
			<p>信息网络传播视听节目许可证：0910417</p>
		</div>
	</div>
</template>

<script>
import Vue from 'Vue';
import Header from '../Commons/Header.vue';
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default{
	name:"Details",
	data(){
		return {
			className:'fa fa-angle-down',
			pan:false,
			arr:[],
			infos:[],
			loading:false,
			page:1,
			count:5
		}
	},
	methods:{
		trans(){
			this.className=(this.className=='fa fa-angle-down'?'fa fa-angle-up':'fa fa-angle-down');
			this.pan=!this.pan;
			this.show();
		},
		show(){
			if(this.pan==false){
				$('.big_title_txt').css('text-overflow','ellipsis')
							.css('white-space','nowrap')
							.css('overflow','hidden');
			}else{
				$('.big_title_txt').css('text-overflow','initial ')
							.css('white-space','initial ')
							.css('overflow','initial ');
			}
		},
		//请求视频下的小视频列表的函数
		datas(){
			this.$axios.get('http://localhost:8080/static/data/vediolist.json',{})
			.then((response)=>{
				this.arr=response;
				this.arr=this.arr.slice(0,this.page*this.count);
			})
			.catch((error)=>{
				console.log(error);
			})
		},
		//获取本页视频的信息
		info(){
			this.$axios.get('http://localhost:8080/static/data/vediolist.json',{})
			.then((response)=>{
				for(let i=0;i<response.length;i++){
					if(response[i].id==this.$route.query.userID){
						this.infos=response[i]
					}
				}
			})
			.catch((error)=>{
				console.log(error);
			})
		},
		//懒加载
		loadMore() {
			this.datas(this.page++)
		}
	},
	mounted(){
		this.show();
		this.datas();
		this.info();
		
	},
	components:{
		Header,
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
#Details{
	#DetailsBody{
		.slide-fade-enter-active {
		  transition: all .3s ease;
		}
		.slide-fade-leave-active {
		  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		.slide-fade-enter, .slide-fade-leave-to{
		  transform: translateX(10px);
		  opacity: 0;
		}
		
		.DetailsBody_movie{
			video{
				width: 100%;;
				.height(422);
			}
		}
		.open_app{
			text-align:center;
			input{
				.width(700);
				.height(72);
				text-align:center;
				.line-height(72);
				color:white;
				background:#fb7299;
				.font-size(35);
				.border-radius(60);
				.margin-top(20);
				.margin-bottom(10);
			}
			
		}
		.produce{
			.padding-left(20);
			.padding-right(20);
			.big_title{
				overflow:hidden;
				p{
					.font-size(33);
					text-align:left;
					float:left;
					display:inline-block;
					.width(660);
					.margin-top(15);
				}
				i{
					float: left;
					.font-size(46);
					color:#C4C4C4;
				}
			}
			.little_title{
				.width(700);
				.height(40);
				text-align:left;
				.margin-top(20);
				a{
					.font-size(12);
					color:black;
					.margin-right(30);
					float:left;
				}
				span{
					.font-size(16);
					color:#C4C4C4;
					float:left;
					.margin-right(20);
				}
			}
			.infos{
				p{
					.font-size(16);
					text-align:left;
					color:#C4C4C4;
					.margin-top(10);
					span{
						color:#FF6891;
					}
				}
				ul{
					overflow:hidden;
					li{
						float:left;
						.font-size(16);
						.padding(20,20,20,20);
						.border-radius(50);
						.margin-right(30);
						background:#f4f4f4;
						.margin-top(10);
						.margin-left(10)
					}
				}
				ol{
					overflow:hidden;
					.margin-top(20);
					li{
						float:left;
						.font-size(25);
						.margin-left(10);
						.margin-right(40);
						.margin-bottom(20);
						color:gray;
						i{
							.font-size(40)
						}
					}
				}
				
			}
		}
		.DetailsBigBody{
				overflow: hidden;
				.DetailsBigBody_content{
					overflow: hidden;
					.left{
						.margin-top(15);
						position:relative;
						float:left;
						.width(234);
						.margin-left(20);
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
							.height(146);
							.border-radius(15)
						}
						
					}
					.right{
						float:left;
						.height(165);
						.margin-top(6);
						.width(450);
						.margin-left(20);
						input{
							float:left;
							border:1px solid #fb7299;
							color:#fb7299;
							.border-radius(4);
							.font-size(12);
							background:white;
							.padding(2,10,2,10);
							.margin-top(3);
						}
						.title{
							.font-size(30);
							text-align:left;
							overflow: hidden;
								text-overflow:ellipsis;
								white-space: nowrap;
						}
						.little_title{
							.font-size(12);
							color:#999;
							text-align:left;
							.margin-top(10);
							.margin-bottom(10);
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
}

</style>