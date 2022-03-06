<template>
	<view>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" :dotsStyles="dotsStyles">
			<swiper class="swiper-box" @change="change" >
				<block v-for="(item ,index) in info" :key="index">
		        <swiper-item >
					<view class="swiper-item">
						<block v-for="(items,indexs) in item" :key="indexs">
							<view class="conteng-img">
								<image :src="items.img" mode="widthFix" class="uploadimg"></image>
								<text>{{items.msg}}</text>
							</view>
						</block>
					</view>
		        </swiper-item>
				</block>
		    </swiper >
		</uni-swiper-dot>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
				dotsStyles:{
					backgroundColor: 'rgba(228,228, 228,0.3)',
					selectedBackgroundColor	:"#FECC33",
					border:'',
					selectedBorder:'',
					bottom:0
				},
	            current: 0,
	            mode: 'round',
				info: [
					[
						{
							img:'../../static/index_icon/closely/1.png',
							msg:'美食'
						},{
							img:'../../static/index_icon/closely/2.png',
							msg:"蔬菜水果"
						},{
							img:'../../static/index_icon/closely/3.png',
							msg:"买药"
						},{
							img:'../../static/index_icon/closely/4.png',
							msg:"跑腿代购"
						},{
							img:'../../static/index_icon/closely/5.png',
							msg:"晚餐"
						},{
							img:'../../static/index_icon/closely/6.png',
							msg:"甜点饮品"
						},{
							img:'../../static/index_icon/closely/7.png',
							msg:"天天神卷"
						},{
							img:'../../static/index_icon/closely/8.png',
							msg:"家常菜"
						},{
							img:'../../static/index_icon/closely/9.png',
							msg:"快食简餐"
						},{
							img:'../../static/index_icon/closely/10.png',
							msg:"超市便利"
						}
					],
					[
						{
							img:'../../static/index_icon/closely/11.png',
							msg:'津贴联盟'
						},{
							img:'../../static/index_icon/closely/12.png',
							msg:"美团专送"
						},{
							img:'../../static/index_icon/closely/13.png',
							msg:"鸭脖卤味"
						},{
							img:'../../static/index_icon/closely/14.png',
							msg:"麻辣烫冒菜"
						},{
							img:'../../static/index_icon/closely/15.png',
							msg:"甜蜜蛋糕"
						},{
							img:'../../static/index_icon/closely/16.png',
							msg:"暖胃粉面"
						},{
							img:'../../static/index_icon/closely/17.png',
							msg:"饺子馆"
						},{
							img:'../../static/index_icon/closely/18.png',
							msg:"无辣不欢"
						},{
							img:'../../static/index_icon/closely/19.png',
							msg:"日韩料理"
						},{
							img:'../../static/index_icon/closely/20.png',
							msg:"全部分类"
						}
					]
				]
	        }
	    },
	    methods: {
	        change(e) {
	            this.current = e.detail.current;
	        }
	    }
	}
</script>

<style scoped>
	swiper{
		height: 320upx !important;
	}
	.swiper-item{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		height: 320upx;
	}
	.conteng-img{
		width: calc((100% / 5) - 12px) !important;
		margin: 6px;
		position: relative;
		text-align: center;
	}
	.conteng-img text{
		padding-top: 20upx;
		font-size: 25upx;
	}
	.uploadimg{
		width: 70upx;
		height: 70upx;
		border-radius: 50upx;
		display: block;
		margin: 0 auto;
	}
</style>
