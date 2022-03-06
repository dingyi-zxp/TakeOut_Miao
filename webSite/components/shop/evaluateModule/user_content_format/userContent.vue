<template>
	<view class="user_content--format">
		<view class="user_content--client">
			<text class="user_content--text">
				{{content}}
			</text>
			<view class="user_content--images">
					<uni-grid :column="imgGrid">
						<block v-for="img,index in images" :key="index">
							<uni-grid-item>
								<image :src="img"
									style="width: auto;"
									mode="aspectFill"/>
							</uni-grid-item>
						</block>
					</uni-grid>
			</view>
			
		</view>
		<view class="user_content--merchant" v-if="merchant!=''">
			商家回复: {{merchant}}
		</view>
	</view>
</template>

<script>
	export default{
		props:["content","images","merchant"],
		computed:{
			imgGrid(){
				return this.images.length > 2 ? this.images.length : 3;
			}
		}
	}
</script>

<style lang="scss" scoped>
	$merchant_background: #F4F4F4;
	$merchant_font: #999999;
	.user_content--format{
		.user_content--client{
			position: relative;
			margin-top: -20rpx;
			margin-left: 140rpx;
			margin-right: 30rpx;
			.user_content--text{
				word-wrap:break-word;
				color: #565656;
			}
			.user_content--images{
				margin-top: 30rpx;
			}
			
		}
		.user_content--merchant{
			position: relative;
			margin-top: 15rpx;
			margin-left: 140rpx;
			margin-right: 30rpx;
			padding: 10rpx 10rpx;
			height: auto;
			color: $merchant_font;
			background-color: $merchant_background;
		}
	}
	
</style>
