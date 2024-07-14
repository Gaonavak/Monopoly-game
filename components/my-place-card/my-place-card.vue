<template>
    <view class="my-place-card">
        <view class="top">
            <view class="left">
                <image class="thumb"
                    :src="thumb"
                    mode="aspectFit"></image>
                <view class="title">
                    {{title}}
                </view>
            </view>

            <TnIcon class="close"
                @click="close"
                name="close"
                size="50"
                color="#808080" />
        </view>

        <view class="desc">
            {{desc}}
        </view>

        <view class="bottom">
            <view class="btn-favorite"
                @click="favorite">
                <TnIcon name="star"
                    size="40rpx" />
            </view>

            <view class="btn-scan"
                @click="showTask">
                <TnIcon name="scan"
                    offset-top="2rpx"
                    size="40rpx" />
            </view>
        </view>
    </view>
</template>

<script setup>
    const props = defineProps(['title', 'thumb', 'desc'])
    const emits = defineEmits(['close', 'showTask', 'favorite'])
    import {
        ref
    } from 'vue'
    import TnButton from '@/uni_modules/tuniaoui-vue3/components/button/src/button.vue'
    import TnIcon from '@/uni_modules/tuniaoui-vue3/components/icon/src/icon.vue'

    const close = () => {
        emits('close')
    }

    const showTask = () => {
        emits('showTask');
    }

    const favorite = () => {
        emits('favorite');
    }
</script>

<style lang="scss"
    scoped>
    .my-place-card {
        width: 100%;
        padding: 20rpx;
        display: flex;
        flex-direction: column;
        border-radius: 20rpx;
        background-color: #fff;
    }

    .top {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .left {
        display: flex;
        flex-direction: row;

        .title {
            margin-left: 20rpx;
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 40rpx;
        }

        .thumb {
            width: 100rpx;
            height: 100rpx;
            object-fit: cover;
            border-radius: 12rpx;
        }
    }

    .close {
        display: flex;
        align-items: center;
    }

    .desc {
        color: grey;
        margin: 30rpx auto;
    }

    .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .btn-favorite,
    .btn-scan {
        display: flex;
        flex-direction: row;
        border-radius: 20rpx;
        border: 3rpx solid #eee;
        transition: 0.05s;
        padding: 15rpx 60rpx;

        &:active {
            background-color: #AEE5FE;
        }
    }

    .btn-favorite::after {
        content: '收藏';
        font-size: 30rpx;
        margin-left: 10rpx;
    }

    .btn-scan::after {
        content: '打卡';
        font-size: 30rpx;
        margin-left: 10rpx;
    }
</style>