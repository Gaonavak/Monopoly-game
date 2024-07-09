<template>
    <view class="my-card">
        <view class="list" v-for="(item,index) in arr" :key="index" @click="naviTo(item.path)">
            <view class="left">
                <image class="icon" :src="item.leftIcon" mode="aspectFit"></image>
                <view class="title">{{item.title}}</view>
            </view>

            <view class="right">
                <image class="icon" :src="item.rightIcon" mode="aspectFit"></image>
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
    .my-card {
        width: 100%;
        max-width: 690rpx;
        margin: 0 auto;
        background: $bg-card;
        border-radius: $border-radius;
        overflow: hidden;
    }

    .list {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1rpx solid $border-seperator;
        padding: 25rpx;
        overflow: hidden;

        &:last-child {
            border-bottom: none;
        }
    }

    .left {
        display: flex;
        flex-direction: row;
        align-items: center;

        .icon {
            width: 50rpx;
            height: 50rpx;
            object-fit: cover;
            margin-top: 15rpx;
        }

        .title {
            margin-left: 20rpx;
            font-size: 30rpx;
        }
    }

    .right .icon {
        width: 50rpx;
        height: 50rpx;
        margin-top: 15rpx;
    }
</style>