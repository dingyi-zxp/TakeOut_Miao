<template>
	<view class="select_show">
		<uni-row >
		    <uni-col :span="8">
				<!-- 选择使用的模块 没完善 -->
				<view>
					<uni-segmented-control :current="current" style="font-size: 30upx;" :values="items" style-type="text" active-color="red" @clickItem="onClickItem" />
					<view class="content">
						<!-- 点菜 -->
						<view v-if="current === 0">
							<view class="content_show--scope">
								<Order ></Order>
								<!-- <text>hello</text> -->
							</view>
						</view>
						
						<!-- 套餐 -->
						<view v-if="current === 1">
							
						</view>
						
						<!-- 评论 -->
						<view v-if="current === 2">
							<view >
								<Evaluate></Evaluate>	
							</view>
						</view>
					</view>
				</view>
		    </uni-col>
			<!-- unfinished -->
		    <uni-col :span="5" :offset="6">
		        <uni-tag text="好友拼单" type="warning"  inverted="true" @click="bindClick"></uni-tag>
		    </uni-col>
			<uni-col :span="4" :offset="1" >
				<!-- unfinished -->
			    <uni-tag @click="xxx()" text="搜索" circle="true" ></uni-tag>
			</uni-col>
		</uni-row>
		
	</view>
</template>

<script>
	import Order from "./order.vue"
	import Evaluate from "./Evaluate.vue"
	
	export default {
			components: {
				Order,Evaluate
			},
			data() {
				return {
					items: ['点菜', '套餐', '评价'],
					 current: 0,
					id: {}
				}
			},
			methods: {
				onClickItem(e) {
					if (this.current !== e.currentIndex) {
						this.current = e.currentIndex
					}
				},
				xxx(){
					const xx = uni.request({
						url:"http://localhost:8888/json",
						method:"GET",
						success: (res) => {
							console.log("请求成功")
							console.log(res.data.id)
							this.id = res.data
							console.log(this.id.id)
						},
						fail: (res) => {
							console.log("res请求失败")
						}
					})
					
					console.log(xx)
				}
			}
		}
	
</script>

<style>
	.content_show--scope{
		z-index: 444;
		width: 604rpx;
	}
</style>
