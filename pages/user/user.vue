<template>
    <view class="user">
        <!-- 用户的信息 -->
        <view class="card_user">
            <view class="user_info">
                <view class="left">
                    <view class="avatar">
                        <image src="../../static/logo.png" mode="aspectFit" class="image"></image>
                    </view>
                    <view class="info">
                        <view class="name">用户名</view>
                        <view class="description">用户注册了 n 天</view>
                    </view>
                </view>

                <view class="right">
                    <view class="text">编辑资料</view>
                    <view class="icon">
                        <image src="../../static/user/arrowright.png" mode="aspectFit" class="image"></image>
                    </view>
                </view>
            </view>
        </view>

        <!-- 包含打卡、足迹等 -->
        <view class="card">
            <view class="list" v-for="item in tripList" :key="item.title">
                <view class="item">
                    <view class="icon">
                        <image :src="item.type" mode="aspectFit" class="image"></image>
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
                            <image :src="item.type" mode="aspectFit" class="image"></image>
                        </view>
                        <view class="text">{{item.title}}</view>
                    </view>

                    <view class="right">
                        <view class="icon">
                            <image src="../../static/user/arrowright.png" mode="aspectFit" class="image"></image>
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
    } from 'vue';

    const centerList = ref([{
            title: '用户反馈',
            type: '../../static/user/phone.png'
        },
        {
            title: '关于我们',
            type: '../../static/user/info.png'
        },
        {
            title: '联系我们',
            type: '../../static/user/personadd.png'
        },
        {
            title: '清除缓存',
            type: '../../static/user/trash.png'
        },
    ]);

    const tripList = ref([{
            title: '打卡点',
            type: '../../static/user/flag.png'
        },
        {
            title: '足迹',
            type: '../../static/user/map.png'
        },
        {
            title: '收藏',
            type: '../../static/user/star.png'
        },
    ]);
</script>

<style lang="scss" scoped>
    .user {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background-color: $page-bg-color;
        padding-bottom: 20rpx;
        display: flex;
        flex-direction: column;
        align-items: center;

        .card_user {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 690rpx;
            background-color: $page-bg-color;
            margin: 0 auto;
            padding: 40rpx;
            border-radius: 20rpx;

            .user_info {
                width: 100%;
                padding: 30rpx;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .left {
                    display: flex;
                    align-items: center;

                    .avatar {
                        width: 120rpx;
                        height: 120rpx;
                        border: 3px solid $border-color;
                        border-radius: 50%;
                        overflow: hidden;

                        .image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
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
                        margin-right: 10rpx;
                        /* 确保文本和图标之间有间隔 */
                    }

                    .icon {
                        width: 50rpx;
                        height: 50rpx;

                        .image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
        }

        .card {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            max-width: 690rpx;
            background: $page-bg-card;
            border-radius: 20rpx;
            margin: 0 auto 30rpx auto;

            .list {
                padding: 30rpx 50rpx;

                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .icon {
                        width: 50rpx;
                        height: 50rpx;

                        .image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
        }

        .cardLayout {
            width: 100%;
            max-width: 690rpx;
            background: $page-bg-card;
            border-radius: 20rpx;
            margin: 30px auto;

            .list {
                padding: 10rpx;
                border-bottom: 1px solid $border-color;

                &:last-child {
                    border: none;
                }

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

                            .image {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }

                        .text {
                            font-size: 30rpx;
                            padding-left: 28rpx;
                        }
                    }

                    .right {
                        display: flex;
                        align-items: center;

                        .icon {
                            width: 50rpx;
                            height: 50rpx;

                            .image {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                    }
                }
            }
        }
    }
</style>