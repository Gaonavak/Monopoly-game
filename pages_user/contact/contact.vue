<template>
    <view class="contact">
        <view class="logo-container">
            <image class="logo" src="/static/logo.png" mode="widthFix"></image>
        </view>

        <view class="cardLayout">
            <view class="list" v-for="item in infos" :key="item.text">
                <view class="title">{{ item.title }}</view>
                <view class="info" @click="copyToClipboard(item.text)">{{ item.text }}</view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue';

    const infos = ref([{
            "title": '联系人',
            "text": '张三',
        },
        {
            "title": '电话',
            "text": '18922226666',
        },
        {
            "title": '邮箱',
            "text": 'zhangsan@example.com',
        },
    ]);

    const copyToClipboard = (text) => {
        if (uni.setClipboardData) {
            uni.setClipboardData({
                data: text,
                success: function() {
                    uni.showToast({
                        title: '已复制',
                        icon: 'success',
                    });
                },
            });
        } else {
            console.log('复制失败，剪贴板可能被禁止访问了~');
        }
    };
</script>

<style lang="scss" scoped>
    .contact {
        width: 100%;
        height: 100vh;
        background: $bg-base;
        display: flex;
        flex-direction: column;
        align-items: center;

        .logo-container {
            margin-top: 200rpx;
            margin-bottom: 100rpx;
            display: flex;
            justify-content: center;
            align-items: flex-end;

            .logo {
                width: 200rpx;
                height: 200rpx;
                object-fit: cover;
            }
        }

        .cardLayout {
            width: 100%;
            max-width: 690rpx;
            display: flex;
            flex-direction: column;
            background: $bg-card;
            border-radius: 20rpx;

            .list {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 30rpx;
                border-bottom: 1rpx solid $border-seperator;

                &:last-child {
                    border-bottom: none;
                }

                .title {
                    text-align: left;
                    width: 150rpx;
                    font-size: 1.2em;
                    user-select: none;
                }

                .info {
                    text-align: right;
                    font-size: 1.2em;
                    color: blue;
                    cursor: pointer;
                    user-select: text;
                }
            }
        }
    }
</style>