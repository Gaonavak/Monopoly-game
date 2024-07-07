
wx.cloud.init();
// 定义云函数导出对象
module.exports = {
  async get(code) {
    try {
      const result = await cloud.openapi.auth.code2Session({
        code: code
      });

      // result 包含 openid 和 session_key
      const { openid, session_key } = result;
      
      return {
        openid,
        session_key
      };
    } catch (err) {
      console.error('调用 code2Session 失败', err);
      throw err; // 抛出异常，交给调用者处理
    }
  }
};
