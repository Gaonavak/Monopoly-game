import {
    ref
} from 'vue';

// 扫描二维码
const openPoints = ref(0);
const check_in = ref(0);

// 获取用户数据
const fetchUserData = async () => {
    // 从数据库中获取用户数据
    try {
        const db = uniCloud.database();
        const collection = db.collection('user_information');
        const res = await collection.where({
            userId: '1'
        }).get();

        if (res.result.data && res.result.data.length > 0) {
            const userData = res.result.data[0];
            openPoints.value = userData.openPoints;
            check_in.value = userData.check_in;
        } else {
            console.error('用户数据获取失败');
        }
    } catch (error) {
        console.error('获取用户数据时出错：', error);
    }
};

// 扫描二维码处理函数
const scanQRCode = async () => {
    try {
        const res = await uni.scanCode();
        console.log('扫描二维码结果:', res);
        const data = JSON.parse(res.result); // 解析二维码中的 JSON 内容

        if (data.latitude && data.longitude) {
            const scannedLatitude = data.latitude;
            const scannedLongitude = data.longitude;

            // 获取云数据库中的地址信息
            const db = uniCloud.database();
            const collection = db.collection('address'); // 替换为你的集合名称
            const dbRes = await collection.get();
            const locations = dbRes.result.data;

            // 遍历数据库中的地址信息，查找是否有匹配的经纬度
            let matchFound = false;
            for (let location of locations) {
                if (location.latitude === scannedLatitude && location.longitude === scannedLongitude) {
                    matchFound = true;
                    break;
                }
            }

            if (matchFound) {
                console.log('打卡成功');
                await addPoints(); // 调用 addPoints 方法增加积分
            } else {
                console.log('地址匹配失败');
                uni.showToast({
                    title: '打卡失败',
                    icon: 'none'
                });
            }
        } else {
            throw new Error('Invalid location data');
        }
    } catch (e) {
        console.error('解析地址失败', e);
        uni.showToast({
            title: '解析地址失败',
            icon: 'none'
        });
    }
};

// 增加积分
const addPoints = async () => {
    const userId = '1'; // 用户 ID
    const pointsToAdd = 10; // 每次增加的积分数
    const checkinToAdd = 1;
    try {
        const res = await uniCloud.callFunction({
            name: 'updatePoints',
            data: {
                userId: userId,
                pointsToAdd: pointsToAdd,
                checkinToAdd: checkinToAdd,
            }
        });

        if (res.result.success && res.result.updated === 1) {
            // 更新成功，更新前端显示的积分和打卡点
            openPoints.value += pointsToAdd;
            check_in.value += checkinToAdd;
            //getServerData(); // 假设此函数用于更新图表数据
            uni.showToast({
                title: `积分+${pointsToAdd}`,
                icon: 'success'
            });
        } else {
            throw new Error(res.result.error || '更新积分失败');
        }
    } catch (e) {
        console.error('调用云函数更新积分失败', e);
        uni.showToast({
            title: '更新积分失败',
            icon: 'none'
        });
    }
};

export {
    scanQRCode,
    fetchUserData,
    openPoints,
    check_in,
};
