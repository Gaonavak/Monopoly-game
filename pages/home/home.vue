<template>
    <view class="home">
        <map :latitude="latitude" :longitude="longitude" class="map">
            <!-- 换页按钮容器 -->
            <view class="nav-container">
                <navigator v-for="item in navList" :key="item.title" :url="item.url" open-type="navigate"
                    hover-start-time="1000" hover-stay-time="0">
                    <cover-image :src="item.icon" class="image"></cover-image>
                </navigator>
            </view>

            <!-- 功能按钮容器 -->
            <view class="btn-container">
                <cover-image v-for="btn in btns" :key="btn.title" :src="btn.icon" class="image"
                    @click="btn.func"></cover-image>
            </view>

            <!-- 地点详情 -->
            <uni-card class="card" :title="place.title" :thumbnail="place.thumb" :extra="place.extra"
                @click="clickCard">
                <text>{{place.desp}}</text>
            </uni-card>
        </map>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue';

    const scanQRCode = () => {
        uni.showToast({
            title: '二维码'
        });
    };

    const getLocation = () => {
        uni.showToast({
            title: '重新获取位置'
        });
    };

    const checkIn = () => {
        uni.showToast({
            title: '签到',
            icon: 'none'
        });
    }

    const getPlaceInfo = () => {
        uni.showToast({
            title: '更多',
            icon: 'none'
        });
    }

    const clickCard = (type) => {
        switch (type) {
            case 'title':
                getPlaceInfo();
            case 'extra':
                checkIn();
        };

    };


    const navList = ref([{
            title: '关于',
            icon: '/static/user/info.png',
            url: '/pages_user/about'
        },
        {
            title: '帮助',
            icon: '/static/user/phone.png',
            url: '/pages_user/contact'
        },
        {
            title: '开发者',
            icon: '/static/dev.png',
            url: '/pages_home/location'
        }
    ]);

    const btns = ref([{
            title: '扫描二维码',
            icon: '/static/home/scan.png',
            func: scanQRCode
        },
        {
            title: '重新获取位置',
            icon: '/static/home/relocation.png',
            func: getLocation
        }
    ]);

    // 南澳岛的经纬度
    const latitude = ref(23.434194);
    const longitude = ref(117.062956);

    const place = ref({
        title: '景点',
        thumb: '/static/logo.png',
        extra: '打卡',
        desp: '这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。',
    });
</script>

<style lang="scss" scoped>
    .home {
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    .map {
        width: 100%;
        height: 100%;
    }

    .nav-container {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 5;
        margin: 30rpx;
        padding: 20rpx;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 20rpx;
        box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.2);
    }

    .btn-container {
        position: absolute;
        top: 350rpx;
        right: 0;
        z-index: 5;
        margin: 30rpx;
        padding: 20rpx;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 20rpx;
        box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.2);
    }

    .image {
        width: 60rpx;
        height: 60rpx;
        padding: 15rpx 0;
        border-radius: 50%;
        object-fit: cover;
    }

    .card {
        position: absolute;
        bottom: 25rpx;
        left: 0;
        right: 0;
        border-radius: 20rpx;
        z-index: 5;
    }
</style>