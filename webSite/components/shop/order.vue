<template>
	<view class="container" >
		<uni-row class="content_info">
			<view class="content_info-indexes">
				
				<uni-col :span="5" >
					<!-- 右边索引 -->
					<scroll-view scroll-y=true class="content_info-indexes__all--style" >
						<view :data-id="item.id" v-for="item,index in list" @tap="bindToView">
							<!-- 快速导航 -->	
							<view class="content_info-indexes__style--location " 
								:class="{'content_info-indexes__style':toLocation == index, 'content_info-indexes__style--notSelect':toLocation != index}">
								<uni-badge size="small"
											:text="item.totalgoods" 
											absolute="rightTop"
											type="error"
											:offset="ubadgeOffset">
									{{item.text}}
								</uni-badge>
							</view>
						</view>
					</scroll-view>
				</uni-col>
				
			</view>
			<!-- 左边内容 -->
			<uni-col :span="9" >
				<scroll-view 
					class="scroller" 
					:scroll-into-view="toView" 
					scroll-y="true" 
					scroll-with-animation="true">
					<view 
						class="left" 
						:id="item.id" 
						v-for="(item,index) in list" >
						<!-- 分类 -->
						<view  
							class="content_info-indexes_name">
							{{item.text}}
						</view>
						
						<block v-for="(res,goodsIndex) in item.goods">
							<!-- 商品信息 -->
							<view class="shop_goods">
								<!-- 商品图片 -->
								<view class="shop_goods-img" >
									<image mode="aspectFill" src="https://b.zmtcdn.com/data/pictures/2/16512172/9410759d611db9c62c3acc23c1f27e06.jpg"></image>
								</view>
								<!-- 商品信息 -->
								<view class="shop_goods-info">
									<!-- 商品名称 -->
									<view class="shop_goods-info__name">
										{{res.name}}
									</view>
									<!-- 商品特点 -->
									<view class="shop_goods-info__peculiarity">
										<!-- 标签显示好评率 -->
										<block v-for="pec in res.peculiarity">
											<view class="tagMargin">
												<uni-tag :text="pec"></uni-tag>
											</view>
											<!-- <text>{{ }}</text> -->
										</block>
									</view>
									<!-- 商品评价 -->
									<view class="shop_goods-info__evaluate">
										<!-- 月销量 -->
										<text class="monthlySales">
											月销量{{res.sales}}
										</text>
										<!-- 好评率 -->
										<text class="goodEvaluate">
											好评率 {{res.evaluate}}%
										</text>
									</view>
									<!-- 折扣特点 -->
									<view class="aksFor" v-if="1==2">
										<!-- 图标（缺） -->
										<text> {{aks_for}}</text>
									</view>
									<!-- 售价 -->
									<view class="shop_goods-info__price">
										<!-- 实际售价 -->
										<view class="actualPrice">
											¥ {{res.discount * res.price}}
										</view>

										<!-- 原来售价 -->
										<view class="originalPrice" v-if="res.discount < 1">
											¥{{res.price}}
										</view>

										
									</view>
								</view>
								<!-- symbol add and less -->
								<view class="shop_goods__symbol">
									<!-- 有数量的时候显示 -->
									<view class="shop_goods--now" v-if="res.buyNum > 0">
										<view class="shop_goods__symbol--cancel">
											<image src="../../static/shop_img/minus-circle.png" mode="widthFix" @click="buyNumCount(index,goodsIndex,-1)"></image>
										</view>
										<text style="margin-left: 6rpx;">
											{{res.buyNum}}
										</text>	
									</view>
									<!-- 添加 -->
									<view class="shop_goods__symbol--add" @click="buyNumCount(index,goodsIndex,1)">
										<image src="../../static/shop_img/add-fill.png" mode="widthFix"></image>
									</view>
								</view>
							</view>
						</block>
					</view>
				</scroll-view>
			</uni-col>
		</uni-row>
		
		<view class="shoppingCart" > 
			<view class="cart-icon-size">
				<view class="shoppingCart-Icon">
					<uni-badge size="small" 
							:text="totalGoods" 
							absolute="rightTop" 
							type="error">
						<image :src="cartImageSelect" 
							class="cart_icon__loaction cartIcon_size" 
							:class="{'not_Select-icon':totalGoods == 0}" 
							mode="widthFix">
							</image>
					</uni-badge>
						
				</view>
			</view>
			<view class="distribution" >
				<view class="buyTotleMoney" v-if="sumMoney > 0">
					<view class="buyTotleMoney_real" >
						¥{{sumMoney}}
					</view>
					<view class="buyTotleMoney_orgin" v-if="true">
						¥15
					</view>
				</view>
				<!-- 配送费 -->
				<view class="not_Select" 
					:class="{'not_Select_loc':sumMoney==0}">
					<!-- 真实配送费 -->
					<text class="remind" >
						预估另需配送费 ¥4
					</text>
					<!-- 实际配送费 -->
					<text class="distribution_price-original" 
						v-if="true">
						¥6
					</text>
				</view>
				
				<!-- 付款 -->
				<view class="distribution-price__pay " >
					<!-- 没有达到起送费 -->
					<view class="distribution-price__pay--unpaid" v-show="moneyGo>sumMoney ">
						<!-- 还差多少起送 -->
						<view class="distribution-price__pay--unpaid__distent">
							差¥{{moneyGo-sumMoney}}起送
						</view>
						<view class="distribution-price__pay--unpaid__helpPay">
							支持代付
						</view>
					</view>
					<!-- 达到配送费 -->
					<view class="distribution-price__pay--canPay" v-show="sumMoney>moneyGo">
						<view class="CanPay_Loc">
							<view class="CanPay_Hint">
								立即支付
							</view>
							
							<view class="distribution-price__pay--unpaid__helpPay">
								支持代付
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				// ../../static/cartIcon/look.png
				// ../../static/cartIcon/run.png
				 toLocation: 0,
				cartImage:"../../static/cartIcon/run.png",
				ubadgeOffset:[0,5],
				toView: '',
				sumGoods:0,
				sumMoney:0,
				moneyGo:20,
				list: [{
					// icon:url
					icon: "",
					id: "hot_sell",
					text: "热销",
					totalgoods:0,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						// 销量
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						discount: 0.89,
						buyNum: 0,
					}]
				},{
					// icon:url
					icon: "",
					id: "hot_sell",
					text: "热销",
					totalgoods:0,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						// 销量
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						buyNum: 0,
					}]
				},{
					// icon:url
					icon: "",
					id: "hot_sell",
					text: "热销",
					totalgoods:0,
					discount: 1,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						// 销量
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						// discount: 8.9
						buyNum: 0,
					}]
				},{
					// icon:url
					icon: "",
					id: "hot_sell",
					text: "热销",
					totalgoods:0,
					discount: 1,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						// 销量
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						// discount: 8.9
						buyNum: 0,
					}]
				},{
					// icon:url
					icon: "",
					id: "hot_sell",
					text: "热销",
					totalgoods:0,
					discount: 1,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						// 销量
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						buyNum: 0,
					}]
				}, {
					// icon:url
					icon: "",
					id: "discount",
					text: "折扣",
					totalgoods:0,
					discount: 1,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						buyNum: 0,
					}]
				}, {
					// icon:url
					icon: "",
					id: "discount",
					text: "折扣",
					totalgoods:0,
					discount: 1,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						buyNum: 0,
					}]
				}, {
					// icon:url
					icon: "",
					id: "discount",
					text: "折扣",
					totalgoods:0,
					discount: 1,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						buyNum: 0,
					}],
					totalgoods:0,
				}, {
					// icon:url
					icon: "",
					id: "ccc",
					text: "cc",
					discount: 1,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						buyNum: 0,
					}],
					totalgoods:0,
				}, {
					// icon:url
					icon: "",
					id: "ddd",
					discount: 1,
					text: "ddd",
					totalgoods:0,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						buyNum: 0
					},{
						img: "",
						name: "管饱套餐",
						discount: 1,
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						buyNum: 0
					},{
						img: "",
						name: "管饱套餐",
						// 特点
						discount: 1,
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						buyNum: 0
					},{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						sales: 200,
						discount: 1,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						buyNum: 0
					},{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						discount: 0.89,
						buyNum: 0
					}]
				}, {
					// icon:url
					icon: "",
					id: "xxx",
					text: "xxx",
					discount: 1,
					totalgoods:0,
					goods: [{
						img: "",
						name: "管饱套餐",
						// 特点
						peculiarity: [
							"约500克",
							"鸡肉块"
						],
						sales: 200,
						// 好评率
						evaluate: 100,
						// 售价
						price: 58,
						discount: 8.9,
						buyNum: 0
					}]
				}]

			}
		},
		methods: {
			bindToView(event) {
				var id = event.currentTarget.dataset.id;
				console.log(id)
				this.toView = id;
			},
			buyNumCount(fIndex, sIndex, oper){
				console.log(this.list[fIndex].goods[sIndex].buyNum += oper)
				console.log("hello:>" + oper * this.list[fIndex].goods[sIndex].price)
				// if(this.sumMoney != 0 && oper != -1){
				this.sumMoney += oper * this.list[fIndex].goods[sIndex].price
					// console(this.sumMoney );
				// }
				this.list[fIndex].totalgoods += oper
				console.log(fIndex + " " + sIndex)
			},backPage(){
				console.log("back")
				uni.navigateBack({delta: 1})
			}
		},
		computed: {
			totalGoods(){
				let sum = 0
				this.list.forEach((i)=>{
					sum += i.totalgoods
				})
				console.log()
				return sum
			},
			cartImageSelect(){
				return this.totalGoods == 0 ? "../../static/cartIcon/look.png" : "../../static/cartIcon/run.png"
			},
		},
		created() {
			// 折扣数更新金额
			for (let i = 0; i < this.list_info.list.goods.length; i++) {
				this.list_info.list.goods.price *= this.list_info.list.goods.discount
			}
		}

	}
</script>

<style lang="scss">
	
	$cartHeight: 150upx;
	$fontColorGaryNotSelect: #B5B5B5;
	$fontNotSelectWeight : 300;
	$fontSelectColor: #000000;
	$fontSelectWeight : 500;
	// $fontSelectSize : 32;
	$fontColorGary: #999999;
	
	@import "../../common/shopCss/GoodsInfo.scss";
	@import "../../common/shopCss/shopCart.scss";
	.content_info-indexes__all--style{
		overflow: hidden;
		height: 900rpx;
		.content_info-indexes__style--location{
			background-color: #FAFAFA;
			width: 100%;	
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
		}
		.content_info-indexes__style{
			color: $fontSelectColor;
			font-weight: $fontSelectColor;
		}
		.content_info-indexes__style--notSelect{
			color: $fontColorGaryNotSelect;
			font-weight: $fontNotSelectWeight;
		}
	}
	.scroller{
		width: 590rpx;
		height: 800rpx;
	}
	.container{
		position: relative;
		margin-top: 25rpx;
		z-index: 999;
	}
	
	
	.content_info-indexes_name{
		font-weight: $fontNotSelectWeight;
		font-size:40rpx;
	}
	.content_info{
		width: 600upx;
		overflow: hidden;
	}
	
	
	
	
	
</style>
