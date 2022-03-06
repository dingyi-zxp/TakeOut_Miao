<template>
	<view class="TPGrade">
		<view class="tasteGrade">
			<view class="textStyle">口味</view>
			<uni-rate :disabled="true" 
					disabledColor="#FFA103" 
					:value="parceParceGrade.taste"
					size="16"/>
			<text class="dightStyle">{{parceParceGrade.taste}}</text>
		</view>
		<view class="parceGrade">
			<text class="textStyle">包装</text>
			<uni-rate :disabled="true"
					disabledColor="#FFA103" 
					:value="parceParceGrade.parce"
					size="16"/>
			<text class="dightStyle">{{parceParceGrade.parce}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:["parceParceGrade"]
	}
</script>

<style lang="scss" scoped>
	.TPGrade{
		margin-top: 30rpx;
		.tasteGrade{
			display: flex;
		}
		.parceGrade{
			display: flex;
		}
	}
	.textStyle{
		margin-right: 30rpx;
		font-size: 28rpx;
		color: #727272;
	}
	.dightStyle{
		bottom: 100rpx;
		margin-left: 30rpx;
		color: #FFA103;
	}
</style>
