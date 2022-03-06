<template>
	<view class="prefer-posi">
		<view class="delicacy-view">
			<view class="delicacy-list delicacy-grow" @click="multiple()">
				<text>{{synthesize}}</text>
				<image :src="imgAdd" mode="widthFix"></image>
			</view>
			<view class="delicacy-grow" @click="saLes()">
				销量高
			</view>
			<view class="delicacy-grow" @click="saLes()">
				速度快
			</view>
			<view class="delicacy-grow" @click="saLes()">
				津贴联盟
			</view>
			<view class="delicacy-list delicacy-right" @click="scReen()">
				<text>筛选</text>
				<image src="../../static/index_icon/down.png" mode="widthFix"></image>
			</view>
		</view>
		
		<!-- 综合排序 -->
		<view class="sortlist sortliteltle" v-if="drop">
			<block v-for="(item,index) in sortlist" :key="index">
				<text :class="{activeb:index == num}" @click="sortClick(index,item.name)">
					{{item.name}}
				</text>
			</block>
		</view>
		
		<!-- 筛选 -->
		<view class="sortlist sortlist-view" v-if="sortmen">
			<!-- 多选 -->
			<block v-for="(item,index) in screendata" :key="index">
				<view >
					<view class="sortlist-title">
						{{item.title}}
					</view>
					<view class="sortlist-flex">
						<block v-for="(itemdata,indexs) in item.datas" :key="indexs">
							<text class="Choice">
								{{itemdata.name}}
							</text>
						</block>
					</view>
				</view>
			</block>
			
			<!-- 单选 -->
			<block v-for="(item,index) in person" :key="index">
				<view>
					<view class="sortlist-title">
						{{item.title}}
					</view>
					<view class="sortlist-flex">
						<block v-for="(itemdata,indexs) in item.datas" :key="indexs">
							<text class="Choice" >
								{{itemdata.name}}
							</text>
						</block>
					</view>
				</view>
			</block>
			
			<!-- 选择 -->
			<view class="sortlist-bottom">
				<text @click="emPty()">
					清空
				</text>
				<text @click="flag && compLete()">完成</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				synthesize:"综合排序",
				imgAdd:"../../static/index_icon/down.png",
				
				sortmen:false,
				drop:false,
				ying:false,
				
				num: 0,
				sortlist:[
					{
						"name":"综合排名",
						"srceen":"_id",
						"nums": 1
					},
					{
						"name":"距离最近",
						"srceen":"_id",
						"nums": 1
					},
					{
						"name":"评分最高",
						"srceen":"_id",
						"nums": 1
					},
					{
						"name":"起送价最低",
						"srceen":"_id",
						"nums": 1
					},
					{
						"name":"配送费最低",
						"srceen":"_id",
						"nums": 1
					},
					{
						"name":"人均高到低",
						"srceen":"_id",
						"nums": 1
					},
					{
						"name":"人均低到高",
						"srceen":"_id",
						"nums": 1
					}
				],
				
				screendata:[
					{
						"title":"商家特色(可多选)",
						"datas":[
							{
								"id": 1,
								"sign":"duration",
								"name":"配送最快"
							},{
								"id": 1,
								"sign":"deliver",
								"name":"0元起送"
							},{
								"id": 1,
								"sign":"physi",
								"name":"免费配送"
							}
						]
					}
				],
				person:[
					{
						"title":"人均价",
						"datas":[
							{
								"name":"20元以下",
								"per":{
									"$lt":20
								},
							},
							{
								"name":"20-40元",
								"per":{
									"$lte":40,
									"$gte":20
								},
							},
							{
								"name":"40元以上",
								"per":{
									"$gt":40
								},
							},
								
						]
					}
				],
				
			}
		},
		methods: {
			multiple(){
				this.sortmen = false
				this.drop = !this.drop
				if(this.drop){
					this.imgAdd = "../../static/index_icon/up.png"
				}else{
					this.imgAdd = "../../static/index_icon/down.png"
				}
				this.backOne()
			},
			sortClick(index,name){
				this.synthesize = name
				this.num =index
				this.drop = false
				this.backClic()
			},
			backOne(){
				setTimeout(() => {
					this.ying = true
				},310)
			},
				backClic(){
				this.ying = false
				this.drop = false
			},
			// 销量，速度，补贴
			saLes(){
				this.backClic()
			},
			// 筛选
			scReen(){
				this.drop = false
				this.sortmen = !this.sortmen
				this.backOne()
			}
		}
	}
</script>

<style scoped>
	.delicacy-list image{
		width: 30upx;
		height: 30upx;
		display: block;
	}
	.delicacy-view{
		font-size: 30upx;
		display: flex;
		align-items: center;
		color: #666666;
		height: 70upx;
		padding: 0 15upx;
		background: #FFFFFF;
	}
	.delicacy-list{
		display: flex;
		align-items: center;
	}
	.delicacy-right{
		justify-content: flex-end;
		align-items: center;
	}
	.delicacy-grow{
		flex-grow: 1;
	}
	.prefer-posi{
		position: absolute;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 999;
	}
	
	/*排序*/
	.sortlist{
		border: #FFFFFF;
		background: #F7F7F7;
	}
	.sortliteltle text{
		padding: 0 15upx;
		display: block;
		font-size: 30upx;
		height: 70upx;
		line-height: 70upx;
		border: 1rpx solid #ededed;
	}
	/* 选中 */
	.activeb{
		color: #f89903 !important;
	}
	
	/* 相对定位 */
	.sortlist-view{
		height: 700upx;
		overflow: hidden;
		overflow-y: scroll;
		position: relative;
	}
	
	.sortlist-title{
		padding: 0 15upx;
		font-size: 30upx;
		height: 60upx;
		line-height: 60upx;
	}
	.Choice{
		font-size: 28upx;
		background: #F8F8F8;
		height: 55upx;
		line-height: 55upx;
		color: #666666;
		width: calc((100% / 3) - 15px) !important;
		margin: 7.5px;
		text-align: center;
		display: block;
		border-radius: 5upx;
	}
	.sortlist-flex{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 30upx;
	}
	.sortlist-bottom{
		background-color: #FFFFFF;
		height: 80upx;
		border-top: 1upx solid #e4e4e4;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.sortlist-bottom text{
		flex-grow: 1;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
	}
	.sortlist-bottom text:nth-child(1){
		border-right: 1upx solid #e4e4e4;
	}
	.sortlist-bottom text:nth-child(2){
		background: #ffd348;
	}
	
	/* 多选 */
	.scractive{
		background: #fef6df !important;
		color: #f29909 !important;
	}
</style>
