module.exports = {
	const appid = 'wx780cda425e3fa9c5';
      const secret = '9ffa351b2bbe58965bff7ab2dab47129';
	  const axios = require('axios');
	  const bodyParser = require('body-parser');
  async get(code) {
    try {
        const wxResponse = await axios.get('https://api.weixin.qq.com/sns/jscode2session', {
          params: {
            appid: appId,
            secret: appSecret,
            js_code: code,
            grant_type: 'authorization_code'
          }
        });
    
        const { openid, session_key } = wxResponse.data;
		
		return wxResponse.data;
};
