<template>
    <view class="my-task-card">
        <view class="left">
            <image class="gif"
                :src="gif"
                mode="aspectFit"></image>
        </view>

        <view class="right">
            <view class="title">{{title}}</view>

            <view class="desc">{{desc}}</view>

            <view class="btns">
                <view class="btn-share"
                    @click="share">
                    <TnIcon name="share-triangle"
                        size="40rpx" />
                </view>

                <view class="btn-scan"
                    @click="scanQRCode">
                    <TnIcon name="scan"
                        offset-top="2rpx"
                        size="40rpx" />
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
    const props = defineProps(['gif', 'title', 'desc'])
    const emits = defineEmits(['share', 'scanQRCode'])
    import TnIcon from '@/uni_modules/tuniaoui-vue3/components/icon/src/icon.vue'
    import {
        scanQRCode,
        fetchUserData,
        openPoints,
        check_in
    } from '@/pages/home/QR.js';

    const share = () => {
        emits('share');
    }


</script>

<style lang="scss"
    scoped>
    .my-task-card {
        width: 100%;
        background-color: $bg-card;
        border-radius: 20rpx;
        display: flex;
        flex-direction: row;
    }

    .left {
        flex: 0.4;
        padding: 30rpx;

        .gif {
            border-radius: 20rpx;
            width: 100%;
            height: 100%;
        }
    }

    .right {
        flex: 0.6;
        display: flex;
        flex-direction: column;
        padding: 30rpx 15rpx;
    }

    .title {
        font-weight: bold;
        font-size: 40rpx;
    }

    .desc {
        margin-top: 15rpx;
    }

    .btns {
        margin-top: 15rpx;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .btn-share,
    .btn-scan {
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-radius: 30rpx;
        border: 3rpx solid #eee;
        transition: 0.05s;
        padding: 12rpx 20rpx;


        &:active {
            background-color: #AEE5FE;
        }
    }

    .btn-share::after {
        content: '分享';
        margin-left: 10rpx;
        font-size: 30rpx;
    }

    .btn-scan::after {
        content: "答题";
        margin-left: 10rpx;
        font-size: 30rpx;
    }
</style>