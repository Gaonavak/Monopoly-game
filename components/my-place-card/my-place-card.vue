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
            <!-- 未收藏 -->
            <view v-if="favoriteStatus"
                class="btn-favorite"
                @click="togglefavoriteStatus">
                <TnIcon name="star"
                    size="40rpx" />
            </view>

            <!-- 收藏后 -->
            <view v-else
                class="btn-favorite"
                @click="togglefavoriteStatus">
                <TnIcon name="star-fill"
                    size="40rpx"
                    color="#c1ff31" />
            </view>

            <!-- 点击打开任务卡片 -->
            <view class="btn-scan"
                @click="handleShowTask">
                <TnIcon name="scan"
                    offset-top="2rpx"
                    size="40rpx" />
            </view>
        </view>

        <TnPopup v-model="showTask"
            radius="16rpx"
            open-direction="bottom">
            <my-task-card :gif="gif"
                :title="quesTitle"
                :desc="ques" />
        </TnPopup>
    </view>
</template>

<script setup>
    const props = defineProps(['title', 'thumb', 'desc', 'gif', 'quesTitle', 'ques']);
    const emits = defineEmits(['close', 'favorite']);
    import {
        ref
    } from 'vue';
    import TnButton from '@/uni_modules/tuniaoui-vue3/components/button/src/button.vue';
    import TnPopup from '@/uni_modules/tuniaoui-vue3/components/popup/src/popup.vue';
    import TnIcon from '@/uni_modules/tuniaoui-vue3/components/icon/src/icon.vue';
    import {
        favorite
    } from '@/pages/home/map.js';

    const close = () => {
        emits('close');
    };

    const favoriteStatus = ref(false);
    const togglefavoriteStatus = () => {
        favoriteStatus.value = !favoriteStatus.value;
    };

    const showTask = ref(false);
    const handleShowTask = () => {
        showTask.value = true;
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