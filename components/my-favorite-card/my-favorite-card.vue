<template>
    <view class="my-favorite-card">
        <view class="title">
            <view class="left">
                <image class="image" :src="place.image" mode="aspectFit"></image>
                <view class="name">{{place.title}}</view>
            </view>
            <view class="right">
                <view class="star">
                    <TnIcon v-if="!place.isFavorite" name="star" size="50rpx" @click="toggleFavorite" />
                    <TnIcon v-else name="star-fill" size="50rpx" color="#c1ff31" @click="toggleFavorite" />
                </view>
                <view class="checkin" @click="checkin">
                    <button>打卡</button>
                </view>
            </view>
        </view>

        <view class="desc">{{place.desc}}</view>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue';
    import TnIcon from '@/uni_modules/tuniaoui-vue3/components/icon/src/icon.vue'

    const props = defineProps(['place'])
    const emit = defineEmits(['update', 'checkin'])

    const toggleFavorite = () => {
        emit('update', !props.place.isFavorite);
    }

    const checkin = () => {
        emit('checkin')
    }
</script>

<style lang="scss" scoped>
    .my-favorite-card {
        width: 100%;
        background-color: $bg-card;
        border-radius: 20rpx;
    }

    .title {
        margin: 20rpx;
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .left,
    .right {
        margin-top: 20rpx;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .image,
    .star {
        width: 80rpx;
        height: 80rpx;
        border-radius: 20rpx;
        display: inline-flex;
        justify-content: start;
        align-items: center;
    }

    .name,
    .checkin {
        margin-left: 20rpx;
        display: flex;
        align-items: center;
    }

    .desc {
        font-size: 25rpx;
        padding: 20rpx;
        color: grey;
    }
</style>