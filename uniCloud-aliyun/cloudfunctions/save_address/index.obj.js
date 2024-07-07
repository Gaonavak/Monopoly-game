const db = uniCloud.database();
const collection = db.collection('address');

exports.main = async (event, context) => {
  try {
    const { latitude, longitude, address } = event;
    const data = {
      latitude,
      longitude,
      address,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    let res = await collection.add(data);
    return {
      code: 0,
      message: '数据上传成功',
      data: res
    };
  } catch (error) {
    console.error("上传数据时出错：", error);
    return {
      code: 500,
      message: '上传数据失败，请重试',
      error: error.message
    };
  }
};
