//提示
import axios from 'axios'
const errdata = {
	errlist(err){
		uni.showToast({
			title:'err',
			duration:2000,
			icon:'loading'
		})
	}
}