<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#FFB122" @clickItem="onClickItem" />
		</view>
		<block v-if="exitedData===0">
			<NoExited></NoExited>
		</block>
	</view>
</template>
 
<script>
	import NoExited from "../../components/order/noExited.vue"
	export default {
		components: {
			NoExited
		},
		data() {
			return {
				items: ['全部订单', '待评价', '退款'],
				current: 0,
				order:[
						{
							name:"hello"
						},
					],
				evaluate:[],
				refund:[]
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			}
		},computed:{
			exitedData(){
				return this.current === 0 ? this.order.length : this.current === 1 ? this.evaluate.length : this.refund.length;
			}
		}
	}
</script>