<template>
	<view class="search-cont">
		<uni-search-bar :radius="100" placeholder="麻辣烫" :focus="true" :cancelButton="none" :clearButton="none" @focus="search_food()" ></uni-search-bar>
		<uni-tag text="标签" circle="true" @click="search_food()"></uni-tag>
		<button ></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			search_food(){
				uni.navigateTo({
				    url: 'https://uniapp.dcloud.io/api/router?id=navigateto'
				});
			}
		}
	}
</script>

<style scoped>

</style>
