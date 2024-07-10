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
            <my-card-row :arr="rowCardData"></my-card-row>
        </view>

        <!-- 纵向列表 -->
        <view class="colCard">
            <my-card :arr="colCardData"></my-card>
        </view>
        <view class="colCard">
            <my-card :arr="cleanCache"></my-card>
        </view>

    </view>
</template>


<script setup>
    import {
        ref
    } from 'vue';
    const userName = ref('张三')
    const avatarUrl = ref('/static/logo.png');
    const naviTo = (path) => {
        if (!path) {
            return;
        }
        uni.navigateTo({
            url: path,
            fail() {
                uni.showToast({
                    title: '跳转失败，请检查网络...'
                })
            }
        })
    };
    const clean = () => {
        uni.showToast({
            title: '清理完成',
            icon: 'none'
        })
    }
    const rowCardData = ref([{
            title: '打卡点',
            icon: '/static/user/flag.png',
            path: '/pages_user/about/about'
        },
        {
            title: '足迹',
            icon: '/static/user/map.png',
            path: '/pages_user/about/about'
        },
        {
            title: '收藏',
            icon: '/static/user/star.png',
            path: '/pages_user/about/about'
        }
    ]);

    const colCardData = ref([{
            title: '用户反馈',
            leftIcon: '/static/user/phone.png',
            rightIcon: '/static/user/arrowright.png',
            path: '/pages_user/contact/contact'
        }, {
            title: '联系我们',
            leftIcon: '/static/user/personadd.png',
            rightIcon: '/static/user/arrowright.png',
            path: '/pages_user/contact/contact'
        },
        {
            title: '关于我们',
            leftIcon: '/static/user/info.png',
            rightIcon: '/static/user/arrowright.png',
            path: '/pages_user/about/about'
        }
    ]);

    const cleanCache = ref([{
        title: '清理缓存',
        leftIcon: '/static/user/trash.png',
        rightIcon: '/static/user/arrowright.png',
        path: clean
    }])
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