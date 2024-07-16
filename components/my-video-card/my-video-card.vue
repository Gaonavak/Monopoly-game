<template>
    <view class="my-video-card">
        <image class="image"
            :src="image"
            mode="widthFix" />
        <view class="title">{{title}}</view>
    </view>
</template>

<script setup>
defineProps(['image', 'title'])
</script>
<style lang="scss"
    scoped>
    .my-video-card {
        position: relative;
        display: flex;
        justify-content: center;
        border-radius: 12rpx;
        overflow: hidden;
        border: 1rpx solid grey;
    }

    .image {
        width: 400rpx;
        object-fit: cover;
    }

    .title {
        position: absolute;
        bottom: 0;
        width: 100%;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        padding: 20rpx 0;
    }
</style>