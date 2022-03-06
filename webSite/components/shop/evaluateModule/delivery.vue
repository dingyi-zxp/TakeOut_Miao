<template>
	<view class="delivery">
		<view class="dightFormat">{{deliveryGrade}}</view>
		<view class="textFormat">配送评分</view>
	</view>
</template>

<script>
	export default{
		props:["deliveryGrade"]
	}
</script>

<style lang="scss" scoped>
	.delivery{
		color: #727272;
		.dightFormat{
			font-size: 70rpx;
			font-weight: 350;
		}
		.textFormat{
			font-size: 28rpx;
		}
	}
</style>
