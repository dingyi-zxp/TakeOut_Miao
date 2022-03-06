<template>
	<view class="user_frame">
		<uni-row >
			
			<uni-col :span="4">
				<image class="user_photo" src="../../../../static/user_img/cat.jpg" mode="aspectFill"></image>
			</uni-col>
			<uni-col  :span="15" :push="0">
				<view class="user_name_star">
					<view class="user_name">
						{{name}}
					</view>
					<view class="user_star">
						<uni-rate :disabled="true"
							:max="5" 
							:size="18" 
							:value="star"
							disabledColor="#FFA103" />
							<text>{{arrivalTimeShow}}</text>
						
					</view>
				</view>
			</uni-col>
			<uni-col :span="1">
				<view class="sendDate">
					{{date}}
				</view>
			</uni-col>
		</uni-row>
	</view>
</template>

<script>
	export default{
		props:[
			"photo","name","star","arrivalTime","date"
		],
		computed:{
			arrivalTimeShow(){
				return this.arrivalTime + "分钟送达"
			}
		}
	}
</script>

<style lang="scss" scoped>
	$grey:#ABABAB;
	.user_frame{
		margin:  30rpx 30rpx;
		.user_photo{
			margin-top: 10rpx;
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
		.user_name_star{
			display: inline-block;
			.user_name{
				font-size: 40rpx;
				color: #333333;
			}
			.user_star{
				display: flex;
				font-size: 28rpx;
				color: $grey;
				text{
					margin-left: 10rpx;
				}
			}
		}
		.sendDate{
			margin-top: 10rpx;
			font-size: 26rpx;
			color: $grey;
		}
	}
</style>
