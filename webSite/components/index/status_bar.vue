<template>
	<view class="status_bar">
		<view class="status_bar--map" >
			<image class="status_bar--map_img status_bar--map_img_location" src="../../static/index_icon/location.png" style="width: 37.64rpx; height: 35.29rpx; ">
			</image>
			<text class="status_bar--map_text">福清市</text>
			<image class="status_bar--map_img status_bar--map_img_" src="../../static/index_icon/right.png" style="width: 13px; height: 13px;"></image>
		</view>
	</view>
</template>

<script>
	
</script>

<style scoped>
.status_bar{
	background-color: #FFDC4D;
	width: 100%;
	height: 235.29rpx;
	z-index: 1;
	position: relative;
	margin:  0;
}
.status_bar--map{
	position: relative;
	display: flex;
	align-items: center;
	top: 37%;
	z-index: 10;
}
.status_bar--map_text{
	font-size: 37.64rpx;
}
.status_bar--map_img{
	margin: 5.88rpx;
}
.status_bar--map_img_{
	
}
.status_bar--map_img_location{
	margin-left: 3%;
}
</style>
