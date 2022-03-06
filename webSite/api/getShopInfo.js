
const getShopInfo = function(urling){
	uni.request({
		url:"http://localhost:8888/json",
		method:"GET",
		success: (res) => {
			console.log("请求成功")
			console.log(res)
		},
		fail: (res) => {
			console.log("res请求失败")
		}
	})
}
