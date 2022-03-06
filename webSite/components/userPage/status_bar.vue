<template>
	<view class="user_background">
	
		<view class="user-info">
			<text class="user-info_content">
				我的
			</text>
			<view class="user-info-basic">
				<image :src="userInfo.photo ==='' ? 'https://catmiao.oss-cn-beijing.aliyuncs.com/take-out/static/login/yKsK58YBzILqriNC9c0FaZ4D.jpg': userInfo.photo " mode="widthFix"></image>
				<text class="user-info-userName">{{userInfo.userName === '' ? '登录/注册' : userInfo.userName}}</text>
				<text class="user-info-tel">{{safePhone}}</text>
				
				<view class="update_info--button"> 
					<image mode="widthFix" src="../../static/user_img/update.png"></image>
					<text>修改</text>
				</view>
			</view>
		</view>
		<view class="list_show">
		<uni-list>
			<uni-list-item showArrow="true">
				<view slot="body" >
					<text>我的米粒</text>
					<text class="list-location list-number-color">{{userInfo.MiLi }}</text>
					<text class="list-text-color">{{MiLiExchange}}</text>
				</view>
			</uni-list-item>
			<uni-list-item showArrow="true">
				<view slot="body" >
					<text>美团红包</text>
					<text class="list-location list-number-color" style="font-size: 41.17rpx; margin-right: 5.88rpx;">{{userInfo.HongBao}}</text>
					<text class="list-text-color">张</text>
				</view>
			</uni-list-item>
			<uni-list-item showArrow="true">
				<view slot="body" >
					<text >代金劵</text>
					<text class="list-location list-number-color" style="font-size: 41.17rpx;; margin-right: 5.88rpx;">{{userInfo.MiLi}}</text>
					<text class="list-text-color">张</text>
				</view>
			</uni-list-item>
			<uni-list-item showArrow="true">
				<view slot="body" >
					<text>拼好饭代金劵</text>
				</view>
			</uni-list-item>
			<uni-list-item showArrow="true">
				<view slot="body" >
					<text>津贴</text>
					<text class="list-location list-text-color">津贴余额</text>
					<text class="list-number-color" style="font-size: 37.64rpx; margin: 0 5.88rpx;">{{userInfo.JinTie}}</text>
					<text class="list-text-color">元</text>
				</view>
			</uni-list-item>
			<block v-for="(item,index) in setting_fun" :key="index">
				<uni-list-item showArrow="true" >
					<view slot="body">
						<view>
							{{item.msg}}
						</view>
					</view>
				</uni-list-item>
				
			</block>
		</uni-list>
		</view>
		<button class="button-exit">退出账号</button>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex';
	
	export default { 
	
		data() {
			return {
				img:"../../static/user_img/cat.jpg",
				userName:"猫猫",
				tel:"17374661514",
				safe_tel:"",
				MiLi: 30,
				HongBao:5,
				DaiJinJuan:6,
				JinTie:20,
				setting_fun:[
					{
						img:"",
						msg:"我的地址"
					},{
						img:"",
						msg:"我的收藏"
					},{
						img:"",
						msg:"我的评价"
					},{
						img:"",
						msg:"发票助手"
					},{
						img:"",
						msg:"企业订餐"
					},{
						img:"",
						msg:"邀请有奖"
					},{
						img:"",
						msg:"客服中心"
					},{
						img:"",
						msg:"协议和说明"
					},{
						img:"",
						msg:"修改手机号",
						right:"17374661514"
					},{
						img:"",
						msg:"餐饮加盟"
					}
				]
				
			}
		},
		methods: {
			
		},computed:{
			...mapGetters(['userInfo','safePhone','MiLiExchange']) 
		},
		created() {
			this.safe_tel = this.tel.substr(0,3) + "****" + this.tel.substr(7)
			console.log(this.$store)
		},
		mounted(){
			console.log(this.userInfo)
		}
	}
</script>

<style>
	.user-info{
		position: fixed;
		right: 0;
		top: 0;
		width: 100%;
		height:  350rpx;
		background-color: #FDD060;
		z-index: 999;
		display:inline-block;
	}
	.user-info_content{
		top: 105rpx;
		left: 338rpx;
		font-size: 37.64rpx;
		font-weight: bolder;
		position: absolute;
	}
	.user-info-basic{
		left: 26rpx;
		top: 170rpx;
		
		position: absolute;
		display: inline-block; 
	}
	.user-info-basic image{
		border-radius: 50%;
		width: 150.58rpx;
		height: 150.58rpx;
	}
	.update_info--button{
		width: 100upx;
		height: 50upx;
		border-radius: 10upx;
		position: relative;
		background-color: #FEE7AF;
		left: 370rpx;
		bottom: 75rpx;
		
	}
	.update_info--button image{
		width: 20upx;
		height: 20upx;
		display: inline-block;
		margin-left: 10upx;
		margin-top: 15upx;
		z-index: 9;
	}
	.user-info-userName{
		width: 100%;
		font-size: 40rpx;
		font-weight: 400;
		top: 25upx;
		margin: 0 20rpx;
		position: absolute;
	}	
	.user-info-tel{
		position: relative;
		bottom: 32upx;
		margin: 0 20rpx;
		font-weight: 330;
		font-size: 36upx;
	}
	.list_show{
		margin-top: 350rpx;
	}
	.list-location{
		margin-left: 17.64rpx;
	}
	.list-number-color{
		color: #FF4002;
	}
	.list-text-color{
		color: #6F7174;
		font-weight: 300;
	}
	.button-exit{
		background-color: #FFFFFF;
		margin: 10upx 0;
	}
	.user_background{
		background-color: #F5F5F5;
		height: 1600upx;
	}
</style>
