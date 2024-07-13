'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
    const {
        userId,
        pointsToAdd,
        checkinToAdd
    } = event;

    try {
        const collection = db.collection('user_information');
        const res = await collection.where({
            userId: userId
        }).update({
            openPoints: db.command.inc(pointsToAdd),

            check_in: db.command.inc(checkinToAdd) // 假设 checkins 是另一个需要递增的字段
        });

        if (res.updated === 1) {
            return {
                success: true,
                updated: res.updated
            };
        } else {
            return {
                success: false,
                error: 'No document updated'
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
};