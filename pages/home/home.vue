<template>
    <view class="home">
        <map :latitude="latitude" :longitude="longitude" class="map">
            <view class="nav-container">
                <view class="nav-item" v-for="item in navList" :key="item.title">
                    <navigator :url="item.url">
                        <cover-image :src="item.icon" class="image"></cover-image>
                    </navigator>
                </view>
            </view>

            <cover-view class="card-container">
                <uni-card class="card" :title="places.title" :thumbnail="places.thumb" :extra="places.extra">
                    <text>{{places.desp}}</text>
                </uni-card>
            </cover-view>
        </map>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue';

    const navList = ref([{
            title: 'about',
            icon: '../../static/user/info.png',
            url: '/pages_user/about'
        },
        {
            title: 'help',
            icon: '../../static/user/phone.png',
            url: '/pages_user/contact'
        }
    ])

    const latitude = ref(23.434194);
    const longitude = ref(117.062956);

    const places = ref({
        title: '景点',
        thumb: '../../static/logo.png',
        extra: '打卡',
        desp: '这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。'
    })
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
        margin: 30rpx;
        padding: 20rpx;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 20rpx;
        box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.2);
    }

    .nav-item {
        margin-top: 35rpx;
        border-radius: 50%;

        .image {
            width: 60rpx;
            height: 60rpx;
            object-fit: cover;
            clip-path: circle(50rpx at center);
        }
    }

    .card-container {
        position: absolute;
        bottom: 25rpx;
        left: 0;
        right: 0;

        .card {
            border-radius: 20rpx;
        }
    }
</style>