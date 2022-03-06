<template>
	<view class="content_frame">
		<block v-for="user,index in user_evaluate" :key="index">
			<view class="user_content">
				<UserInfo :photo="user.photo" 
						:name="user.name" 
						:star="user.star" 
						:arrivalTime="user.arrivalTime" 
						:date="user.date" >
						</UserInfo>
				<UserContent :content="user.content"
							:images="user.images"
							:merchant="user.merchant">
							</UserContent>
			</view>
		</block>
	</view>
</template>

<script>
	import UserInfo from "./user_content_format/userInfo.vue"
	import UserContent from "./user_content_format/userContent.vue"
	export default{
		components:{
			UserInfo,UserContent
		},
		props:["contentTag"],
		data(){
			return{
				user_evaluate:[{
					photo:"",
					name:"cuteMiao",
					star:5,
					arrivalTime:"12",
					date:"2022.02.19",
					content:"美味又多汁",
					images:["../../../../static/user_img/cat.jpg","../../../../static/user_img/cat.jpg"],
					merchant:"谢谢你的肯定"
				},{
					photo:"",
					name:"cuteMiao",
					star:3,
					arrivalTime:"12",
					date:"2022.02.19",
					content:"谢谢你的肯定谢谢你的肯定谢谢你的肯定谢谢你的肯定谢谢你的肯定谢谢你的肯定谢谢你的肯定谢谢你的肯定谢谢你的肯定谢谢你的肯定",
					images:[],
					merchant:""
				},{
					photo:"",
					name:"cuteMiao",
					star:3,
					arrivalTime:"12",
					date:"2022.02.19",
					content:"好吃",
					images:["../../../../static/user_img/cat.jpg","../../../../static/user_img/cat.jpg","../../../../static/user_img/cat.jpg"],
					merchant:""
				},{
					photo:"",
					name:"cuteMiao",
					star:3,
					arrivalTime:"12",
					date:"2022.02.19",
					content:"好吃",
					images:[],
					merchant:""
				},{
					photo:"",
					name:"cuteMiao",
					star:3,
					arrivalTime:"12",
					date:"2022.02.19",
					content:"好吃",
					images:[],
					merchant:""
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content_frame{
		height: auto;
		.user_content{
			width: 100%;
		}
	}
</style>
