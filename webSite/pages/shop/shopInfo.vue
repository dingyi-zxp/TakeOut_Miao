<template>
	<view class="container">
		<Introduce></Introduce>
		<Select class="container-select"></Select>
	</view>
</template>

<script>
	import Introduce from "../../components/shop/shop_info.vue"
	import Select from "../../components/shop/select_context.vue"
	export default{
		components:{
			Introduce,
			Select
		}
	}
</script>

<style> 
	.container-select{
		position: relative;
		bottom: 200upx;
	}
</style>
