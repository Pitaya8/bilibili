<template>
	<div id="SearchNav">
		<ul>
			<li  v-for="(item,index) in list1" :key="index" @click="dispose($event,item.path)">
				<span>{{item.title}}</span>
			</li>
		</ul>
		<ol>
			<li v-for="(item,index) in list2" :key="index">
				<span @click="showColor2($event)">{{item}}</span>
			</li>
		</ol>
	</div>
</template>

<script>
export default{
	name:"SearchNav",
	data(){
		return {
			list1:[
			{title:'综合',path:'/SearchAfter',name:'SearchAfter'},
			{title:'番剧(0)',path:'/fanju',name:'fanju'},
			{title:'UP主(87)',path:'/UPzhu',name:'UPzhu'},
			{title:'影视(0)',path:'/yinshi',name:'yinshi'}
			],
			list2:['默认排序','播放多','新发布','弹幕多']
		}
	},
	methods:{
		dispose(item,path){
			this.$router.push({path:`${path}`,params:{userID:123}})
			
			if(item.target.nodeName=='SPAN'){
				$('#SearchNav ul li span').attr('class','');
				$('#SearchNav ul li span').css('border-bottom','2px solid white');
				item.target.setAttribute('class','selected');
				item.target.style.borderBottom='2px solid #fb7299';
			}
			if($('#SearchNav ul li span').eq(0).attr('class')){
				$('#SearchNav ol').css('display','flex');
			}else{
				$('#SearchNav ol').css('display','none');
			}
		},
		showColor2(index){
			if(index.target.nodeName=='SPAN'){
				$('#SearchNav ol li span').attr('class','');
				index.target.setAttribute('class','selected');
			}
		}
	},
	mounted(){
		//初始化样式
		$('#SearchNav ul li span').eq(0).attr('class','selected');
		$('#SearchNav ul li span').eq(0).css('border-bottom','2px solid #fb7299');
		$('#SearchNav ol li span').eq(0).attr('class','selected');
		
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/main.less';
#SearchNav{
	.margin-top(88);
	ul{
		display: flex;
		li{
			flex:1;
			.font-size(25);
			box-sizing:border-box;
			color:#757575;
			.padding(20,20,10,20);
			.margin-left(-5);
			span{
				.height(50);
			    display: inline-block;
			}
			.selected{
				color:#fb7299;
			}
		}
	}
	ol{
		display: flex;
		li{
			flex:1;
			.font-size(25);
			box-sizing:border-box;
			color:#757575;
			.padding(20,20,10,20);
			.margin-left(-5);
			background:#f9f9f9;
			span{
				.height(50);
			    display: inline-block;
			}
			.selected{
				color:#fb7299;
			}
		}
	}
}
</style>