<template>
	<view class="container">
		<view class="info-background" >
			<image  
				src="../../static/shop_img/eva.jpeg">
			</image>
			<view class="backPageF" 
				@click="backPage()">
				<image class="backPageImage" 
					src="../../static/backspace.png"
					mode="widthFix"></image>
			</view>
		</view>
		<view class="info-shop">
			<uni-card class="info-card" is-shadow="true" spacing="0">
			   <template v-slot:title>
				   <view class="info-card__intro">
					   <!-- logo -->
						<image mode="aspectFill" :src="shopIntro.img"></image>
						<!-- 店铺名称 -->
						<text class="info-card__intro--company">{{shopIntro.company}}</text>
						<!-- 特点 -->
						<view class="info-card__intro--">
							<block v-for="(item,index) in shopIntro.especially" :key="index">
								<view class="info-card__intro--especially">
									<image :src="item.icon" mode="widthFix"></image>
									<text>{{item.text}}</text>
								</view>
							</block>
						</view>
						<!-- 公告 -->
						<view class="info-card__intro--notice">
							<text>
								{{notice}}
							</text>
						</view>
				   </view>
			   </template>
			   <!-- 显示特点 -->
				<template v-slot:actions>
					<view class="info-card__discounts">
						<view class="info-card__discounts_show">
							<block v-for="(item,index) in shopIntro.discounts" :key="index">
								<block v-for="(i,j) in item" :key="j">
										<!-- {{i.discount}} -->
										<!-- {{show(i.discount)}} -->
										<!-- {{j}} -->
										<!-- {{addDiscounts(i.discount)}} -->
										<view class="info-card__discounts_show-tag">
										<uni-tag :text="i.discount" inverted="true" circle="true" type="error"></uni-tag>
										</view>
								</block>
									
							</block>
						
						</view>
					</view>
				</template>
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				shopIntro:{
					img:"/static/user_img/cat.jpg",
					company:"猫娘乐园",
					especially:[
						{
							icon:"../../static/shop_img/score.png",
							text:"5"
						},{
							icon:"../../static/shop_img/time.png",
							text:"配送约1分钟"
						}
					],
					notice:"有可以的猫猫",
					discounts:[
						[
							{
								discount:"22减7"
							},{
								discount:"22减7"
							},{
								discount:"22减7"
							},{
								discount:"22减7"
							},
						],
						[
							{
								discount:"6.89折起"
							}
						]
					],
					discount:[]
				},
				temp:"jj",
				num:0
			}
		},
		computed:{
			notice(){
				return "公告：" + this.shopIntro.notice
			},
			
		},methods:{
			showOther(){
				console.log("h3llo")
			},
			addDiscounts(work){
				this.temp += work + ""
				console.log(this.num)
				this.num ++
				console.log(this.temp)
			},
			show(t){
				// let s = this.temp
				// s = s + t
				// this.temp = s
				let tt = t + "";
				this.temp = this.temp + tt
				console.log(t)
			},backPage(){
				console.log("back")
				uni.navigateBack({delta:1})
			}
		}
	}
</script>

<style lang="scss">
	.backPageF{
		z-index: 999;
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		top: 103rpx;
		left: 50rpx;
		.backPageImage{
			width: 50rpx;
		}
	}
	/* 背景图片 */
	.container{
		// position: relative;
		z-index: -1;
	}
	.info-background image{
		left: 0;
		right: 0;
		top: 0;
		position: absolute;
		width: 100%;
		margin: 0 auto;
		height: 350rpx;
		position: relative;
		-webkit-filter: brightness(50%);
		filter: brightness(50%);
	}
	/* 商店信息卡 */
	.info-shop{
		position: relative;
	}
	.info-card{
	
		margin: 0;
		top: -200rpx;
		position: relative;
		
	}
	.info-card__intro{
		margin: 0 5%;
		margin-top: 5%;
		position: relative;
		display: block;
	}
	.info-card__intro image{
		width: 100upx;
		height: 100upx;
		position: relative;
	}
	.info-card__intro--company{
		width: 412upx;
		font-size: 48upx;
		font-weight: 388;
		letter-spacing: 5upx;
		left: 131rpx;
		top: -18rpx;
		position: absolute;
	}
	.info-card__intro--{
		position: absolute; 

		left: 100rpx;
		top: 55rpx;
	}
	.info-card__intro--especially{
		display: inline; 
		margin-left: 30upx; 
	}
	.info-card__intro--especially image{
		width: 33upx;
		height: 33upx; 
	}
	.info-card__intro--especially text{
		font-size: 33upx;
		width: auto;
		align-items: center;
		border: 300;
	}
	.info-card__intro--notice{}
	.info-card__intro--notice text{
		color: #A5A5A5;
		font-size: 28upx;
	}
	.info-card__discounts{
		margin-top: -30rpx;
		background-color: #FAFAFA;
		width: 100%;
		height: 100upx;
	}
	.info-card__discounts_show{
		margin-left: 15rpx;
		position: relative;
		top: 38rpx;
	}
	.info-card__discounts_show-tag{
		display: inline;
		margin-right: 20rpx;
	}
</style>
