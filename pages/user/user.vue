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
                        <view class="name">{{userName}}</view>
                        <view class="description">注册了 n 天</view>
                    </view>
                </view>

                <!-- 包装 navigator 内容 -->
                <navigator :url="'/pages_user/edit?user=' + userName" class="right">
                    <view class="navigator-content">
                        <view class="text">编辑资料</view>
                        <view class="icon">
                            <image src="../../static/user/arrowright.png" mode="aspectFit" class="image"></image>
                        </view>
                    </view>
                </navigator>
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
        <view class="cardList">
            <view class="list" v-for="item in centerList" :key="item.title">
                <navigator :url="item.page" class="item">
                    <view class="navigator-content">
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
                </navigator>
            </view>
        </view>
    </view>
</template>

<script setup>
    import {
        ref,
        watch
    } from 'vue';
    import {
        onShow
    } from '@dcloudio/uni-app';

    import editPage from '../../pages_user/edit.vue'
    const userName = ref('张三');
    onShow(() => {
        uni.$on('userName', (res) => {
            userName.value = res;
        });
    })

    const centerList = ref([{
            title: '用户反馈',
            type: '../../static/user/phone.png',
            page: '/pages_user/feedback',
        },
        {
            title: '关于我们',
            type: '../../static/user/info.png',
            page: '/pages_user/about',
        },
        {
            title: '联系我们',
            type: '../../static/user/personadd.png',
            page: '/pages_user/contact',
        },
        {
            title: '清除缓存',
            type: '../../static/user/trash.png',
            page: '/pages_user/clean',
        },
    ]);

    const tripList = ref([{
            title: '打卡点',
            type: '../../static/user/flag.png',
        },
        {
            title: '足迹',
            type: '../../static/user/map.png',
        },
        {
            title: '收藏',
            type: '../../static/user/star.png',
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

                    // 为了解决编译后自动生成的多余的 navigator-warp 标签页
                    .navigator-content {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        .text {
                            color: $text-font-color-subheading;
                            margin-right: 10rpx;
                            /* 确保文本和图标之间有间隔 */
                        }

                        .icon {
                            width: 50rpx;
                            height: 50rpx;
                            // 偏移，使箭头居中
                            padding-top: 15rpx;

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

        .card {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            max-width: 690rpx;
            background: $page-bg-card;
            border-radius: 20rpx;

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

        .cardList {
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

                    // 为了解决编译后自动生成的多余的 navigator-warp 标签页
                    .navigator-content {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 20rpx 0;

                        .left {
                            display: flex;
                            align-items: center;

                            .icon {
                                padding-top: 15rpx;
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
                                min-width: 50rpx;
                                padding-right: 20rpx;
                                // 偏移，使箭头居中
                                padding-top: 15rpx;

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
    }

    /* 确保 navigator-content 内的元素在同一行显示 */
</style>