

<template>
    <view class="mypoint">
        <view class="summary">
            <view class="title">总积分</view>
            <view class="count">{{ totalPoints }}</view>
        </view>

        <view class="list-box">
            <view class="list" v-for="(record, index) in userRecords" :key="index">
                <view class="title">
                    <view class="name">{{ record.title }}</view>
                    <view class="add-point">{{ record.points }}</view>
                </view>
                <view class="date">日期: {{ record.time }}</view>
                <view class="record-id">描述: {{ record.des }}</view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const totalPoints = ref(0);
    const userRecords = ref([]);

    // 获取用户数据
    const fetchUserData = async () => {
        try {
            const db = uniCloud.database();
            const collection = db.collection('user_point');
            const res = await collection.where({
                userId: '1'
            }).get();

            if (res.result.data && res.result.data.length > 0) {
                userRecords.value = res.result.data;
                // 计算总积分
                totalPoints.value = userRecords.value.reduce((sum, record) => sum + record.points, 0);
            } else {
                console.error('用户数据获取失败');
            }
        } catch (error) {
            console.error('获取用户数据时出错：', error);
        }
    };

    onMounted(() => {
        fetchUserData();
    });
</script>

<style lang="scss" scoped>
    .mypoint {
        width: 100%;
        height: 100%;
        background-color: #eee;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .summary {
        width: 100%;
        max-width: 690rpx;
        padding: 20rpx;
        margin: 20rpx auto;
        border-radius: 20rpx;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .list-box {
        width: 100%;
        max-width: 690rpx;
        background-color: #fff;
        border-radius: 20rpx;
        padding: 20rpx;
        margin-bottom: 30rpx;
        display: flex;
        flex-direction: column;
    }

    .list {
        border-bottom: 2rpx solid #eee;
        display: flex;
        flex-direction: column;

        &:last-child {
            border: none;
        }
    }

    .title,
    .count {
        font-size: 34rpx;
        font-weight: bold;
        margin: 12rpx 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .count {
        color: red;
    }

    .date {
        color: grey;
        margin: 6rpx 0;
    }

    .record-id {
        color: grey;
        margin: 6rpx 0;
        margin-bottom: 12rpx;
    }
</style>

<!-- <template>
    <view class="mypoint">
        <view class="summary">
            <view class="title">总积分</view>
            <view class="count">{{openPoints}}</view>
        </view>


        <view class="list-box">
            <view class="list"
                v-for="i in 10"
                :key="i">
                <view class="title">
                    <view class="name">{{title}}</view>
                    <view class="add-point">{{points}}</view>
                </view>
                <view class="date">日期: {{time}}</view>
                <view class="record-id">描述: {{des}}</view>
            </view>
        </view>


    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue';
    import { openPoints,check_in } from '../../pages/home/QR';

    const points = ref(0);
    const title = ref(0);
    const des = ref(0);
    const time = ref(0);
    
    // 获取用户数据
    const fetchUserData = async () => {
        // 从数据库中获取用户数据
        try {
            const db = uniCloud.database();
            const collection = db.collection('user_point');
            const res = await collection.where({
                userId: '1'
            }).get();
    
            if (res.result.data && res.result.data.length > 0) {
                const userData = res.result.data[0];
                points.value = userData.points;
                title.value = userData.title;
                des.value = userData.title;
                time.value = userData.title;
            } else {
                console.error('用户数据获取失败');
            }
        } catch (error) {
            console.error('获取用户数据时出错：', error);
        }
    };
</script>

<style lang="scss"
    scoped>
    .mypoint {
        width: 100%;
        height: 100%;
        background-color: #eee;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .summary {
        width: 100%;
        max-width: 690rpx;
        padding: 20rpx;
        margin: 20rpx auto;
        border-radius: 20rpx;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .list-box {
        width: 100%;
        max-width: 690rpx;
        background-color: #fff;
        border-radius: 20rpx;
        padding: 20rpx;
        margin-bottom: 30rpx;
        display: 20rpx;
    }

    .list {
        border-bottom: 2rpx solid #eee;
        display: flex;
        flex-direction: column;
        
        &:last-child {
            border: none;
        }
    }

    .title,
    .count {
        font-size: 34rpx;
        font-weight: bold;
        margin: 12rpx 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .count {
        color: red;
    }

    .date {
        color: grey;
        margin: 6rpx 0;
    }

    .record-id {
        color: grey;
        margin: 6rpx 0;
        margin-bottom: 12rpx;
    }
</style> -->