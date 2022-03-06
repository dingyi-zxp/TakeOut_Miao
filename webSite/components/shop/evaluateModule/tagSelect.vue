<template>
	<view class="tag_select_frame">
		<view class="tag_page">
			<block v-for="item,index in tags" :key="index">
				<view class="tagLoc">
					<uni-tag class="tag_style"
							:text="item.name" 
							:type="item.select===1?'warning':'normal'"
							@click="selectTag(index)"/>
				</view>
			</block>
		</view>

	</view>
</template>

<script>
	export default{
		data(){
			return {
				cat:"car",
				tags:[
					{
						name:"全部",
						select:1,
						tid:"all"
					},{
						name:"有图评价",
						select:0,
						tid: "textPhoto"
					},{
						name:"好评",
						select:0,
						tid: "good"
					},{
						name:"中评",
						select:0,
						tid: "medium"
					},{
						name:"差评",
						select:0,
						tid: "poor"
					},
				]
			}
			
		},methods:{
			selectTag(loc){
				for (let i = 0; i < this.tags.length; i++){
					if (i != loc){
						this.tags[i].select = 0;
					}else{
						this.tags[i].select = 1;
						this.$emit('seeEva',this.tags[i].tid);
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tag_select_frame{
		position: relative;
		height: auto;
		width: 100%;
		.tag_page{
			display: inline-flex;
			margin-left: 30rpx;
			margin-bottom: 30rpx;
			.tagLoc{
				zoom: 0;
				position: relative;
				margin-top: 30rpx;
				margin-right: 10rpx;
				.tag_style{
					position: relative;
				}
			}
		}
	}
</style>
