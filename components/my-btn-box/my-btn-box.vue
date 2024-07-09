<template>
    <view class="my-btn-box">
        <image v-for="(item,index) in arr" :key="index" :src="item.icon" mode="aspectFill" class="icon"
            @click="onclick(item.path)">
        </image>
    </view>
</template>

<script setup>
    defineProps(['arr'])
    const onclick = (path) => {
        if (!path) {
            return;
        }
        if (typeof path === 'function') {
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
        });
    }
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