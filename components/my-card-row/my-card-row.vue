<template>
    <view class="my-card-row">
        <view class="item" v-for="(item,index) in arr" :key="index" @click="naviTo(item.path)">
            <image class="icon" :src="item.icon" mode="aspectFill"></image>
            <view class="title">{{item.title}}</view>
        </view>
    </view>
</template>

<script setup>
    defineProps(['arr']);
    const naviTo = (path) => {
        uni.navigateTo({
            url: path
        })
    }
</script>

<style lang="scss" scoped>
    .my-card-row {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background: $bg-card;
        border-radius: $border-radius;
    }
    
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
        margin: 40rpx;
    }

    .icon {
        width: 60rpx;
        height: 60rpx;
        object-fit: cover;
    }

    .title {
        margin-top: 10rpx;
        font-size: 26rpx;
        color: $font-title;
    }
</style>