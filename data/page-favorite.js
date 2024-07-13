// fetchData.js
import { ref } from 'vue';

export const places = ref([]);

export const fetchFavoriteAddresses = async (userId) => {
    try {
        const db = uniCloud.database();
        const collection = db.collection('user_favorite_address');
        const res = await collection.where({
            userId: userId
        }).get();

        if (res.result.data && res.result.data.length > 0) {
            // 将数据库中的数据映射到 places 中
            places.value = res.result.data.map((item, index) => ({
                id: item._id, // 使用数据库中的唯一ID
                title: item.title,
                image: '/static/logo.png', // 可以根据需要替换为实际图片路径
                desc: item.extra,
                isFavorite: true
            }));
        } else {
            console.error('用户收藏地址数据获取失败');
        }
    } catch (error) {
        console.error('获取用户收藏地址数据时出错：', error);
    }
};

export const deleteFavoriteAddress = async (id) => {
    try {
        const db = uniCloud.database();
        const collection = db.collection('user_favorite_address');
        await collection.doc(id).remove();
    } catch (error) {
        console.error('删除收藏地址时出错：', error);
    }
};
