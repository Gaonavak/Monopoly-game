<template>
    <view class="user">
        <!-- 用户的信息 -->
        <view class="user_info">
            <view class="left">
                <view class="avatar">
                    <image src="../../static/logo.png" mode=""></image>
                </view>
                <view class="info">
                    <view class="name">用户名</view>
                    <view class="description">用户注册了 n 天</view>
                </view>
            </view>

            <view class="right">
                <view class="text">编辑资料</view>
                <view class="icon">
                    <uni-icons type="right" size="30" color="#999"></uni-icons>
                </view>
            </view>
        </view>

        <!-- 包含打卡、足迹等 -->
        <view class="card">
            <view class="list" v-for="item in tripList" :key="item.title">
                <view class="item">
                    <view class="icon">
                        <uni-icons :type="item.type" size="30"></uni-icons>
                    </view>
                    <view class="text">{{item.title}}</view>
                </view>
            </view>
        </view>


        <!-- 菜单列表 -->
        <view class="cardLayout">
            <view class="list" v-for="item in centerList" :key="item.title">
                <view class="item">
                    <view class="left">
                        <view class="icon">
                            <uni-icons :type="item.type" size="30"></uni-icons>
                        </view>
                        <view class="text">{{item.title}}</view>
                    </view>

                    <view class="right">
                        <view class="icon">
                            <uni-icons type="right" size="30" color="#999"></uni-icons>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import {
        ref
    } from "vue"

    const centerList = ref([{
        "title": "用户反馈",
        "type": "email"
    }, {
        "title": "关于我们",
        "type": "info"
    }, {
        "title": "联系我们",
        "type": "personadd"
    }, {
        "title": "清除缓存",
        "type": "trash"
    }])

    const tripList = ref([{
        "title": "打卡点",
        "type": "flag"
    }, {
        "title": "足迹",
        "type": "map"
    }, {
        "title": "收藏",
        "type": "flag"
    }])
</script>

<style lang="scss" scoped>
    .user {
        min-height: 100vh;
        background-color: $page-bg-color;
        .user_info {
            width: 690rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50rpx;

            .left {
                display: flex;
                align-items: center;

                .avatar {
                    width: 120rpx;
                    height: 120rpx;
                    border: 3px solid $border-color;
                    border-radius: 50%;
                    overflow: hidden;

                    image {
                        width: 100%;
                        height: 100%;
                    }
                }

                .info {
                    padding-left: 20rpx;

                    .name {
                        font-size: 38rpx;
                    }

                    .description {
                        padding-top: 10rpx;
                        font-size: 26rpx;
                        color: $text-font-color-subheading;
                    }
                }


            }

            .right {
                display: flex;
                align-items: center;

                .text {
                    color: $text-font-color-subheading;
                }

                .icon {}
            }
        }

        .card {
            width: 690rpx;
            background: $page-bg-card;
            border-radius: 20rpx;
            margin: 0 auto 30rpx auto;

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .list {
                padding: 30rpx 50rpx;

                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        }

        .cardLayout {
            width: 690rpx;
            background: $page-bg-card;
            border-radius: 20rpx;
            margin: 30px auto;

            .list {
                padding: 10rpx;
                border-bottom: 1px solid $border-color;

                .item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20rpx 0;

                    .left {
                        display: flex;
                        align-items: center;

                        .icon {
                            padding-left: 30rpx;
                            width: 50rpx;
                            height: 50rpx;
                            overflow: hidden;

                        }

                        .text {
                            font-size: 30rpx;
                            padding-left: 28rpx;
                        }
                    }

                    .right {
                        display: flex;
                        align-items: center;

                        .icon {}

                    }
                }
            }
        }
    }
</style>