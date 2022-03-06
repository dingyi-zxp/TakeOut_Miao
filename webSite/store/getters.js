export const userInfo = function(state) {
	return state.userInfo
}

export const safePhone = (state)=>{
	return state.userInfo.tel.substr(0,3) + "****" + state.userInfo.tel.substr(7)
}

export const MiLiExchange = (state)=>{
	return "米粒,可兑" + Number(state.userInfo.MiLi) / 100 +"元红包"
}