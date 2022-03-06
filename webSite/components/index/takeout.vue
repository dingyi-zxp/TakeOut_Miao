<template>
	<view class="container">
		<block v-for="(item,index) in takeshop" :key="index">
			<view class="content-view" @click="open_shop(item.shopId)">
				<view class="content-img">
					<image :src="item.logo" mode="aspectFill"></image>
				</view>
				<view class="content-title">
					<text class="conteng-take">{{item.shop}}</text>
					<view class="conteng-mothly">
						<text>月售200</text>
						<text>约{{item.duration}}分钟</text>
					</view>
					<view class="conteng-starting">
						<text>起送¥{{item.delivering}}</text>
						<text>配送¥{{item.physical}}</text>
						<text>人均¥{{item.capita}}</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				takeshop:[
					{
						'logo':'https://images.ctfassets.net/9tka4b3550oc/1FQSRLVXt2Q1lvXXkOyW6U/f306561ef7bfc5ab7c84a739a46d3629/Food_09.png?q=75&w=1280',
						'shop':'肯德基',
						"duration":20,
						'delivering':20,
						'physical':30,
						'capita':15,
						'shopId':213
					},
					{
						'logo':'https://images.ctfassets.net/9tka4b3550oc/1FQSRLVXt2Q1lvXXkOyW6U/f306561ef7bfc5ab7c84a739a46d3629/Food_09.png?q=75&w=1280',
						'shop':'肯德基',
						"duration":20,
						'delivering':20,
						'physical':30,
						'capita':15
					},
					{
						'logo':'',
						'shop':'肯德基',
						"duration":20,
						'delivering':20,
						'physical':30,
						'capita':15
					},
					{
						'logo':'',
						'shop':'肯德基',
						"duration":20,
						'delivering':20,
						'physical':30,
						'capita':15
					},
					{
						'logo':'',
						'shop':'肯德基',
						"duration":20,
						'delivering':20,
						'physical':30,
						'capita':15
					},
					{
						'logo':'',
						'shop':'肯德基',
						"duration":20,
						'delivering':20,
						'physical':30,
						'capita':15
					},
					{
						'logo':'',
						'shop':'肯德基',
						"duration":20,
						'delivering':20,
						'physical':30,
						'capita':15
					},
					{
						'logo':'',
						'shop':'肯德基',
						"duration":20,
						'delivering':20,
						'physical':30,
						'capita':15
					},
					{
						'logo':'',
						'shop':'肯德基',
						"duration":20,
						'delivering':20,
						'physical':30,
						'capita':15
					},
					{
						'logo':'',
						'shop':'肯德基',
						"duration":20,
						'delivering':20,
						'physical':30,
						'capita':15
					},
				]
			}
		},
		methods:{
			open_shop(id){
				console.log(id)
				uni.navigateTo({
					url:"../../pages/shop/shopInfo"
				})
			}
		}
	}
</script>

<style scoped>
	.content-view text{
		display: block;
	}
	.content-view{
		display: flex;
		justify-content: space-between;
		height: 200upx !important;
		overflow: hidden;
		border-bottom: 1rpx solid #E4E8EB;
		padding-bottom: 5upx;
		margin: 30upx 0;
		color: #898989;
	}
	.content-img{
		width: 350upx !important;
		height: 200upx !important;
	}
	.content-title{
		width: 100%;
		padding-left: 10upx;
		font-size: 24upx;
	}
	.conteng-take{
		color: #333333;
		height: 50upx;
		font-size: 33upx;
		font-weight: bold;
		line-height: 50upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.conteng-mothly{
		display: flex;
		justify-content: space-between;
		height: 50upx;
		line-height: 50upx;
	}
	.conteng-starting{
		display: flex;
		align-items: center;
		height: 50upx;
		line-height: 50upx;
	}
	.conteng-starting text{
		width: 130upx;
	}
	.content-img image{
		width: 188upx;
		height: 188upx;
		padding-right: 10upx;
		position: relative;
		top: -26rpx;
		left: 24rpx;
	}
	
</style>
