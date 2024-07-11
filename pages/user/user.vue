<template>
    <view class="user">
        <!-- 用户信息 -->
        <view class="card_user">
            <image class="avatar" :src="avatarUrl" mode="aspectFill"></image>

            <view class="info">
                <view class="name">{{userName}}</view>
                <view class="desc">注册了 n 天</view>
            </view>

            <view class="right" @click="naviTo('/pages_user/edit/edit')">
                <view class="text">编辑资料</view>
                <image class="arrowright" src="@/static/user/arrowright.png" mode="aspectFill"></image>
            </view>
        </view>

        <!-- 横向列表 -->
        <view class="rowCard">
            <my-card-row :arr="firstSowCardData"></my-card-row>
        </view>
        <view class="rowCard">
            <my-card-row :arr="secondRowCardData"></my-card-row>
        </view>

        <!-- 纵向列表 -->
        <view class="colCard">
            <my-card :arr="colCardData"></my-card>
        </view>
        <view class="colCard">
            <my-card :arr="cleanCacheCard"></my-card>
        </view>

    </view>
</template>


<script setup>
    import {
        ref
    } from 'vue';
    import {
        firstSowCardData,
        secondRowCardData,
        colCardData,
        cleanCacheCard
    } from '@/data/pages-user.js';

    import {
        naviTo
    } from '@/utils/common.js';

    const userName = ref('张三')
    const avatarUrl = ref('/static/logo.png');
</script>

<style lang="scss" scoped>
    .user {
        width: 100%;
        height: 100vh;
        background-color: #eee;
    }

    .card_user {
        width: 100%;
        max-width: 690rpx;
        padding-top: 80rpx;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .avatar {
            width: 120rpx;
            height: 120rpx;
            border: 3px solid #eee;
            border-radius: 50%;
            margin-left: 30rpx;
        }

        .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-right: auto;
            padding-left: 30rpx;

            .name {
                text-align: start;
                font-size: 38rpx;
            }

            .desc {
                padding-top: 10rpx;
                font-size: 26rpx;
                color: $font-normal;
            }
        }

        .right {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-right: 30rpx;

            .text {
                color: grey;
                margin-right: 10rpx;
            }

            .arrowright {
                width: 50rpx;
                height: 50rpx;
                margin-top: 15rpx;
            }
        }
    }

    .rowCard,
    .colCard {
        width: 100%;
        max-width: 690rpx;
        margin: 0 auto;
    }
</style>