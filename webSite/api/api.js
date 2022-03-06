// 封装请求

import {errdata} from 'errdata.js'

// 'https://meituan.thexxdd.cn/api/forshop/getprefer'
let listing = function(urling){
	return new Promise((resolve,reject)=>{
		uni.request({ 
			url: urling,
			method:'GET'
		})
		.then((res) => {
			resolve(res)
		})
		.catch((err) => {
			let errs = '服务器繁忙'
			errdata.errlist(err)
			reject(errs)
		})
	})
}

expect(listing)