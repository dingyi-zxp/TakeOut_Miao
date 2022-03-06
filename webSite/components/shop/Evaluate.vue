<template>
	<view class="evaluate_frame"> 
	
		<image class="handTop" 
			src="../../static/catHand.png" 
			mode="widthFix"
			@click="goTop()"></image>
		<view class="evaluate_frame--grade">
			<uni-row class="evaluate_frame--formate">
				<uni-col :span="5" :offset="1" > <NumberGrade :grate="grate_number" /> </uni-col>
				<uni-col :span="11" > <TasteParce :parceParceGrade="tasteParceGrade" /> </uni-col>
				<uni-col :span="1"> <Divide></Divide> </uni-col>
				<uni-col :offset="1" :span="4">  <Delivery :deliveryGrade="delivery" /> </uni-col>
			</uni-row>
		</view>
		
		<view class="select_tag--evaluate">
			<TagSelect @seeEva="seeEva"></TagSelect>
		</view>
		<view class="content--evaluate">
			<Content :contentTag="see"></Content>
		</view>
	</view>
</template>

<script>
	import NumberGrade from "./evaluateModule/EGrateNumber.vue"
	import TasteParce from "./evaluateModule/taste_parcel.vue"
	import Delivery from "./evaluateModule/delivery.vue"
	import Divide  from "./evaluateModule/divide.vue"
	import TagSelect from "./evaluateModule/tagSelect.vue"
	import Content from "./evaluateModule/evaluateContent.vue"
	
	export default{
		components:{
			NumberGrade,TasteParce,Delivery,Divide,TagSelect,Content		
		},
		data(){
			return{
				grate_number: 4.7,
				tasteParceGrade:{
					taste:4.5,
					parce:3.5
				},
				delivery:4.9,
				see: ''
			}
		},
		methods:{
			seeEva(value){
				this.see = value;
			},goTop(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300,
					success: () => {
						console.log("miao")
					},
					fail: () => {
						console.log("error")
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@mixin frame_basic {
		margin: 30rpx 0;
		height: auto;
		width: 750rpx;
		background-color: #FFFEFE;
		position: relative;
	}
	.evaluate_frame{
		width: 750rpx;
		height: 100%;
		
		overflow: hidden;
		background-color: #F3F3F4;
		.evaluate_frame--grade{
			@include frame_basic;
		}
		.select_tag--evaluate{
			@include frame_basic;
		}
		.content--evaluate{
			@include frame_basic;
		}
	}
	.handTop{
		position: fixed;
		z-index: 999;
		top: 1300rpx;
		left: 630rpx;
		width: 100rpx;
	}
</style>
