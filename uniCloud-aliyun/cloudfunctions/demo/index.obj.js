// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	get(code) {
		let openid = '1';
		let ession_key = '1';
		const appi = 'wx780cda425e3fa9c5';
		const secret = '9ffa351b2bbe58965bff7ab2dab47129';
		
	    let URL = 'https://api.weixin.qq.com/sns/jscode2session?appid='+ appi +'&secret='+secret+'&js_code='+code+'&grant_type=authorization_code'
		
		uni.request({
		        url: URL , 
		         success:function(res){ 
						openid = res.data.openid;
						ession_key = res.data.ession_key;
		           }
	  });
		console.log('666');
		return {
			openid,
			ession_key
		}
	}
}
