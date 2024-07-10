<template>
    <view class="my-rank-card">
        <view class="list"
            v-for="(role,index) in arr" :key="index"
            @click="naviTo(role.path)">
            <view class="left">
                <view class="order">{{index + 1}}</view>
                <image class="icon" :src="role.avatar" mode="aspectFit"></image>
                <view class="title">{{role.name}}</view>
            </view>

            <view class="right">
                <view class="grade">{{role.grade}}</view>
            </view>
        </view>
    </view>
</template>

<script setup>
    const props = defineProps({
        arr: {
            type: Array,
            required: true
        },
        seperator: {
            type: Boolean,
            default: false
        }
    });
    const naviTo = (path) => {
        if (!path) {
            return;
        }
        if (typeof path == 'function') {
            path();
            return;
        }
        uni.navigateTo({
            url: path,
            fail() {
                uni.showToast({
                    title: '页面不存在，或网络错误',
                    icon: 'closeempty'
                })
            }
        })
    };
</script>

<style lang="scss" scoped>
    .my-rank-card {
        width: 100%;
        margin: 50rpx auto;
        background:
            linear-gradient(to bottom, transparent, #fff 30%),
            radial-gradient(90% 30% at left top, #80A6CD, #DCE5EC),
            radial-gradient(60% 30% at right top, #DCE5EC, #80A6CD);
        border-radius: $border-radius;
        overflow: hidden;
    }

    .list {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 25rpx;
    }

    .left {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 15rpx;

        .order {
            margin: 0 30rpx;
        }

        .icon {
            width: 60rpx;
            height: 60rpx;
            border-radius: 50%;
            object-fit: cover;
        }

        .title {
            margin-left: 20rpx;
            font-size: 30rpx;
        }
    }

    .right {
        margin-right: 50rpx;
    }
</style>