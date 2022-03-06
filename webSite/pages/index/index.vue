<template>
	<view class="container">
		<Tabbar></Tabbar>
		<Search></Search>
	<view class="content">
		<Classify></Classify>
		<Title></Title>
		<view @click="poll()">
			<Delicacy id="boxFixed" :class="{'is_fixed' : isfixed}"></Delicacy>
		</view>
		<view style="height: 50upx;"></view>
		<Takeout></Takeout>
	</view>
	</view>
</template>

<script>
	         
	import Tabbar from "@/components/index/status_bar.vue"
	import Search from "@/components/index/search.vue"
	import Classify from "@/components/index/classify.vue"
	import Title from "@/components/index/title.vue"
	import Delicacy from "@/components/index/delicacy.vue"
	import Takeout from "../../components/index/takeout.vue"
	// import {listing} from "../../api/api.js"
	// import {wxshopurl} from "../../api/requst.js"
	export default {
		components:{
			Tabbar,Search,Classify,
			Delicacy,Title,Takeout
		},
		data() {
			return {
				menutop:"",
				rect:"",
				topdata:"",
				isfixed:false,
				preferdata:[]
			}
		},
		onLoad() {
			const query = wx.createSelectorQuery()
			query.select("#boxFixed").boundingClientRect()
			query.exec((res) => {
				this.menutop = res[0].top
				this.topdata = res[0].top
			})
		},
		onPageScroll(e) {
			this.rect = e.scrollTop
		},
		methods: {
			search_food(){
				console.log("搜索页面") 
			},
			poll(){
				wx.pageScrollTo({
					scrollTop:this.topdata + 2,
					duration:300
				})
			}
			
		},computed:{
			namepage(){
				if(this.rect > this.menutop){
					this.isfixed = true
				}else{
					this.isfixed = false
				}
			}
		}
	
	}
</script>

<style scoped>
	.content{
		margin: 0 15upx;
	}
	.is_fixed{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
	}
</style>
