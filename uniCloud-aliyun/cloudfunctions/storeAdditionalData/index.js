'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
    const { userId, points, timestamp, point_title } = event;

    try {
        const collection = db.collection('user_point');
        const res = await collection.add({
            userId,
            title: point_title,
            des: '签到打卡', // 根据需要填写额外信息简介
            time: timestamp.split('-').join('.'), // 格式化时间为 YYYY.MM.DD
            points
        });

        return {
            success: true,
            id: res.id, // 返回新插入文档的 ID
            event, // 返回输入参数用于调试
            clientInfo: context.CLIENTIP // 返回客户端 IP 用于调试
        };
    } catch (error) {
        return { success: false, error: error.message };
    }
};
'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
    const { userId, points, timestamp, point_title } = event;

    try {
        const collection = db.collection('user_point');
        const res = await collection.add({
            userId,
            title: point_title,
            des: '签到打卡', // 根据需要填写额外信息简介
            time: timestamp.split('-').join('.'), // 格式化时间为 YYYY.MM.DD
            points
        });

        return {
            success: true,
            id: res.id, // 返回新插入文档的 ID
            event, // 返回输入参数用于调试
            clientInfo: context.CLIENTIP // 返回客户端 IP 用于调试
        };
    } catch (error) {
        return { success: false, error: error.message };
    }
};
