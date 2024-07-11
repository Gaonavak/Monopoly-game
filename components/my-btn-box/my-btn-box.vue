<template>
    <view class="my-btn-box">
        <image class="icon" v-for="(item,index) in arr" :key="index" :src="item.icon" mode="aspectFill"
            @click="naviTo(item.path)">
        </image>
    </view>
</template>

<script setup>
    defineProps(['arr']);
    import {
        naviTo
    } from '@/utils/common.js';
</script>

<style lang="scss" scoped>
    .my-btn-box {
        width: 100%;
        max-width: 100rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: $border-radius;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.2);

        .icon {
            margin: 20rpx;
            width: 50rpx;
            height: 50rpx;
            object-fit: cover;
        }
    }
</style>