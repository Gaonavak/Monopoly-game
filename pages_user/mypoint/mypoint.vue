<template>
    <view class="mypoint">
        <view class="summary">
            <view class="title">总积分</view>
            <view class="count">999</view>
        </view>


        <view class="list-box">
            <view class="list"
                v-for="i in 10"
                :key="i">
                <view class="title">
                    <view class="name">南澳</view>
                    <view class="add-point">+10</view>
                </view>
                <view class="date">日期: 2024-07-14 19:11</view>
                <view class="record-id">编号: 1720886400000</view>
            </view>
        </view>


    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue';
</script>

<style lang="scss"
    scoped>
    .mypoint {
        width: 100%;
        height: 100%;
        background-color: #eee;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .summary {
        width: 100%;
        max-width: 690rpx;
        padding: 20rpx;
        margin: 20rpx auto;
        border-radius: 20rpx;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .list-box {
        width: 100%;
        max-width: 690rpx;
        background-color: #fff;
        border-radius: 20rpx;
        padding: 20rpx;
        margin-bottom: 30rpx;
        display: 20rpx;
    }

    .list {
        border-bottom: 2rpx solid #eee;
        display: flex;
        flex-direction: column;
        
        &:last-child {
            border: none;
        }
    }

    .title,
    .count {
        font-size: 34rpx;
        font-weight: bold;
        margin: 12rpx 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .count {
        color: red;
    }

    .date {
        color: grey;
        margin: 6rpx 0;
    }

    .record-id {
        color: grey;
        margin: 6rpx 0;
        margin-bottom: 12rpx;
    }
</style>