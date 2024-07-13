'use strict';
const db = uniCloud.database();
const collection = db.collection('address');

exports.main = async (event, context) => {
  const { latitude, longitude, address } = event;
  
  // 定义数据
  const data = {
    latitude,
    longitude,
    address
  };

  try {
    // 添加数据到数据库
    let res = await collection.add(data);
    return {
      success: true,
      message: '打卡成功'
    };
  } catch (error) {
    console.error("上传数据时出错：", error);
    return {
      success: false,
      message: '上传数据失败，请重试。',
      error
    };
  }
};
