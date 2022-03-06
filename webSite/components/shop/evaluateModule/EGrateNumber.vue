<template>
	<view class="grateNumber_frame">
		<view class="grate_number-show">
			{{grate}}
		</view>
		<view class="grate_number-hint">
			商家评价
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			grate:String
		} 
	}
</script>

<style lang="scss" scoped>
	.grateNumber_frame{
		.grate_number-show{
			color: #FFB005;
			font-size: 80rpx;
			font-weight: 370;
		}
		.grate_number-hint{
			margin-top: -10rpx;
			color: #5E5E5E;
		}
		
	}
</style>