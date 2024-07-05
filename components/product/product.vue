<template>
    <view class="product">
        <image :src="src" mode="aspectFit" class="image"></image>
        <view class="text">
            <view class="title">标题</view>
            <view class="description">好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃</view>
            <view class="price">999 积分</view>
        </view>
    </view>
</template>

<script setup>
    import {
        defineProps
    } from 'vue';

    const props = defineProps({
        src: {
            type: String,
            required: true
        }
    });
</script>

<style lang="scss" scoped>
    .product {
        width: 100%;
        height: 300rpx;
        background: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .image {
            width: 250rpx;
            height: 250rpx;
            object-fit: cover;
            margin: 10rpx;
        }

        .text {
            width: 100%;
            height: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;

            .title, .description, .price{
                flex: 1;
                display: flex;
                align-items: center;
                padding-left: 10rpx;
                padding-right: 10rpx;
            }
            
            .title{
                padding-top: 20rpx;
                font-size: 40rpx;
            }
        }
    }
</style>