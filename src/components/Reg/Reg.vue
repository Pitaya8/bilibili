<template>
	<div class="reg">
		<div class="_reg">
			<!--{{name}}-->
			<!--头部-->
			<div class="reg_header like">
				注册bilibili
			</div>
			
			<!--地区-->
			<div class="reg_area like">
				<span class="ar">中国大陆</span>
				<span class="fa fa-angle-right" aria-hidden="true"></span>
			</div>
			
			<!--用户名和密码-->
			<div class="reg_user like">
				<!--用户名-->
				<input type="text" class="userinfo" id="reg_usname" value="" placeholder="请设置用户名"/>
				<!--密码-->
				<input type="password" maxlength="14" minlength="6" class="userinfo" id="reg_uspass" value="" placeholder="密码，6-14个字符"/>
			</div>
			
			<!--按钮-->
			<div class="btns">
				<router-link to="/log" class="btn_log btn_like">
					登录
				</router-link>
				<a class="btn_reg btn_like">
					<span @click="agree">同意并注册</span>
				</a>
			</div>
			
			<!--底部-->
			<p class="bottom">点击“同意并注册”按钮，即表示同意<a>注册协议</a></p>
			
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'Reg',//当前组件名字
		components:{},
		data(){
			return {
				name:'注册'
			}
		},
		methods:{
			agree(){
				//console.log($('#reg_uspass').val())
				let username=$('#reg_usname').val();
				let userpass=$('#reg_uspass').val();
				
				if (username=='' || userpass=='') {
					alert("请输入用户名或者密码")
				} else{
					this.$axios.get('/api/register',{params:{
				      username:$('#reg_usname').val(),
					  userpass:$('#reg_uspass').val()
					}})
					.then((res)=>{
						//console.log(res)
						alert(res);
						window.location.href="#/log";
					})
					.catch((err)=>{
						alert(err)
					})
				}
				
			}
		}
	}
	
</script>

<!--scoped表示的是下面的样式代码只对这个组件有用-->
<!--lang="less"表示的是下面的样式全是less编译-->
<style lang="less" scoped>
@import '../../styles/main.less';
	
	.reg{
		position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background: #f4f4f4;
        ._reg{
        	width: 100%;
        	height: 100%;
        	/*相同样式*/
        	.like{
        		width: 100%;
        		background: white;
        		.padding(0,18,0,18);
        		border-bottom: 1px solid #e7e7e7;
        	}
        	
        	.reg_header{
        		.height(90);
        		.font-size(35);
        		text-align:center;
        		.line-height(90);
        	}
        	
        	.reg_area{
        		.height(100);
        		.margin(30,0,30,0);
        		span{
        			.font-size(30);
        			display:inline-block;
        			.line-height(100);
        		}
        		.ar{
        			float: left;
        		}
        		.fa{
        			float: right;
        			.font-size(40);
        		}
        	}
        	
        	.reg_user{
        		.height(220);
        		.userinfo{
        			.height(90);
        			width: 100%;
        			.font-size(28);
        		}
        		#reg_usname{
        			border-bottom: 1px solid #e7e7e7;
        		}
        	}
        	
        	.btns{
        		.height(110);
        		width: 100%;
        		.font-size(0);
        		.margin(30,0,30,0);
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
        		.btn_log{
        			border: 1px solid #fb7299;
        			color: #fb7299;
        			.margin-right(25);
        		}
        		.btn_reg{
        			border: 1px solid #ff9db5;
        			background: #ff9db5;
        			color: #fff;
        		}
        	}
        	
        	.bottom{
        		.font-size(25);
        		text-align: center;
        		a{
        			color: #fb7299;
        		}
        	}
        	
        }
	}
	
	
</style>