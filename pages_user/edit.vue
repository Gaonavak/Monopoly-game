<template>
    <view class="edit">
        <view class="cardList">
            <view class="list">
                <view class="left">
                    <view class="title">{{func_avatar.title}}</view>
                </view>
                <view class="right">
                    <view class="avatar">
                        <image :src="func_avatar.imagePath" mode="" class="image"></image>
                    </view>
                    <view class="arrow">
                        <image src="../static/user/arrowright.png" mode="" class="image"></image>
                    </view>
                </view>
            </view>

        </view>
        <view class="cardList">
            <view class="list">
                <view class="left">{{userNameCard.title}}</view>
                <view class="right">
                    <input class="text" v-if="userNameCard.editable" v-model="userNameCard.user"
                        @confirm="confirmEdit(item)" auto-blur @blur="onblur(userNameCard)" />
                    <view class="text" v-else @click="editName(userNameCard)">{{userNameCard.user}}</view>
                    <view class="arrow">
                        <image src="../static/user/arrowright.png" mode="" class="image"></image>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import {
        ref
    } from "vue";
    import {
        onLoad,
        onUnload
    } from '@dcloudio/uni-app';

    const func_avatar = ref({
        "title": "头像",
        "imagePath": "/static/logo.png"
    });
    const userNameCard = ref({
        "title": "名字",
        "user": "",
        "editable": false
    });

    onLoad((options) => {
        userNameCard.value.user = options.user;
    });

    onUnload(() => {
        uni.$emit('userName', userNameCard.value.user);
    });

    function editName(item) {
        if (item) {
            item.editable = true;

        }
    };

    function confirmEdit(item) {
        if (item) {
            item.editable = false;
            console.log('名字已更改为：', item.user);
        }
    }

    function onblur(item) {
        if (item) {
            item.editable = false;
        }
    };
</script>

<style lang="scss" scoped>
    .edit {
        width: 100%;
        height: 100vh;
        background: $page-bg-color;
        display: flex;
        flex-direction: column;
        align-items: center;

        .cardList {
            width: 100%;
            max-width: 690rpx;
            background: $page-bg-card;
            border-radius: 20rpx;
            margin: 15px;

            .list {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .left {
                    margin-left: 30rpx;
                    height: 100rpx;
                    display: flex;
                    align-items: center;
                }

                .right {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .avatar {
                        width: 80rpx;
                        height: 80rpx;
                        margin: 30rpx;
                        border: 3px solid $border-color;
                        border-radius: 50%;
                        overflow: hidden;

                        .image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    .text {
                        margin: 30rpx;
                        color: $text-font-color-subheading;
                    }

                    .arrow {
                        width: 50rpx;
                        height: 50rpx;
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
</style>