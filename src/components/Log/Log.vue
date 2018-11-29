<template>
	<div class="log">
		<div class="_log">
			<!--头部-->
			<div class="log_header like">
				登录bilibili
			</div>
			
			<!--用户名和密码-->
			<div class="log_user like">
				<!--用户名-->
				<div class="logname">
					<span>账号</span>
					<input type="text" class="userinfo" id="log_usname" value="" placeholder="你的用户名"/>
				</div>
				<!--密码-->
				<div class="logpass">
					<span>密码</span>
					<input type="password" class="userinfo" id="log_uspass" value="" placeholder="你的密码"/>
				</div>
			</div>
			
			<p class="forget"><a>忘记密码</a></p>
			
			<!--按钮-->
			<div class="btns">
				<router-link to="/reg" class="btn_reg btn_like">
					注册
				</router-link>
				<a class="btn_log btn_like" @click="login">
					登录
				</a>
			</div>
			
			<!--其它登录方式-->
			<p class="other">其它登录方式</p>
			
			<div class="methods">
				<div class="qq">
					<i class="fa fa-qq" aria-hidden="true"></i>
					<span>QQ</span>
				</div>
				<div class="weibo">
					<i class="fa fa-weibo" aria-hidden="true"></i>
					<span>微博</span>
				</div>
			</div>
			
		</div>
				
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	
	export default{
		name:'Log',//当前组件名字
		components:{},
		data(){
			return {
				name:'登录'
			}
		},
		methods:{
			login(){
				//console.log($('#log_usname').val())
				let u_name=$('#log_usname').val();
				let u_pass=$('#log_uspass').val();
				
				//获取localStorage
				let storage=window.localStorage;
				//console.log(storage.getItem('userpass'));
				let username=storage.getItem('username');
				//console.log(username)
				let userpass=storage.getItem('userpass');
				
				//登录验证 
				if (u_name==username && u_pass==userpass) {
					Toast('登录成功，3秒后跳转首页');
					storage.setItem('succeed_id',u_name);
					
					let timer=setInterval(()=>{
						window.location.href='#/';
						clearInterval(timer)
					},3000);
					//登录后改变状态值
					let mylog=!this.$store.state.logstate;
					this.$store.commit('changeLogState',mylog);
					return true;
				}else{
					Toast('登录失败！用户名或密码不正确');
					return false;
				}
					
			}
		}
	}
	
</script>

<!--scoped表示的是下面的样式代码只对这个组件有用-->
<!--lang="less"表示的是下面的样式全是less编译-->
<style lang="less" scoped>
@import '../../styles/main.less';
	
	.log{
		position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background: #f4f4f4;
         ._log{
        	width: 100%;
        	height: 100%;
        	.like{
        		width: 100%;
        		background: white;
        		.padding(0,18,0,18);
        		border-bottom: 1px solid #e7e7e7;
        	}
        	
        	.log_header{
        		.height(90);
        		.font-size(35);
        		text-align:center;
        		.line-height(90);
        	}
        	
        	.log_user{
        		.height(200);
        		display:flex;
        		border-top:1px solid #e7e7e7;
        		flex-direction: column;
        		.margin-top(30);
        		span{
        			.font-size(28);
        			display:inline-block;
        			flex:2;
        			.padding-top(26);
        		}
        		input{
        			flex: 6;
        			.font-size(28);
        		}
        		.logname{
        			flex: 1;
        			border-bottom: 1px solid #e7e7e7;
        			display: flex;
        		}
        		.logpass{
        			flex: 1;
        			display: flex;
        		}
        		
        	}
        	
        	.forget{
    			.font-size(25);
    			color: #fb7299;
    			.margin-top(15);
    			.padding(0,18,0,18);
    			display:block;
    			.height(50);
    			a{
    				float: right;
    			}
    		}
    		
    		.btns{
        		.height(110);
        		width: 100%;
        		.font-size(0);
        		.margin(30,0,300,0);
        		.padding(0,18,0,18);
        		.btn_like{
        			.font-size(30);
        			display: inline-block;
        			.height(90);
        			.width(340);
        			.border-radius(10,10,10,10);
        			text-align: center;
        			.line-height(90);
        		}
        		.btn_reg{
        			border: 1px solid #fb7299;
        			color: #fb7299;
        			.margin-right(26);
        		}
        		.btn_log{
        			border: 1px solid #ff9db5;
        			background: #ff9db5;
        			color: #fff;
        		}
        	}
        	
        	.other{
        		.font-size(28);
    			color: #757575;
    			display: block;
    			.height(60);
    			text-align: center;
        	}
    		
    		.methods{
    			.height(100);
    			display: flex;
    			.width(600);
    			text-align: center;
    			.qq,.weibo{
    				flex: 1;
    				.font-size(28);
    				color: #757575;
    				display: flex;
    				flex-direction: column;
    			}
    			.qq{
    				text-align: right;
    			}
    			i{
    				.font-size(50);
    			}
    		}
    		
        }
	}
	
</style>