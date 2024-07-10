<template>
    <TnSwitchTab class="switchBar" v-model="currentTabIndex" :tabs="arr.title" active-bg-color="#B3ECFF" disabled
        inactive-bg-color="#FFFFFF">
        <view class="card-goods">
            <view class="item" v-for="(item, index) in arr.list" :key="index">
                <image class="thumb" :src="item.thumb" mode="aspectFill" />
                <view class="name">{{ item.name }}</view>
                <TnButton class="price" @click="buy">积分 {{item.price}}</TnButton>
            </view>
        </view>
    </TnSwitchTab>
</template>

<script setup>
    import {
        ref,
        computed
    } from 'vue';
    defineProps(['arr'])
    import TnButton from '@/uni_modules/tuniaoui-vue3/components/button/src/button.vue'
    import TnSwitchTab from '@/uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.vue'
    const currentTabIndex = ref(0)
    const buy = () => {
        uni.showToast({
            title: '你点击了购买按钮'
        });
    };
</script>

<style lang="scss" scoped>
    .switchBar {
        border-radius: 20rpx;
    }

    .card-goods {
        width: 100%;
        padding: 20rpx;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        gap: 20rpx;
    }

    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10rpx;
        width: calc(33.33% - 40rpx);
        box-sizing: border-box;
    }

    .thumb {
        width: 120rpx;
        height: 120rpx;
        object-fit: cover;
        border-radius: 20rpx;
    }

    .name {
        margin-top: 15rpx;
    }

    .price {
        margin-top: 20rpx;
    }
</style>