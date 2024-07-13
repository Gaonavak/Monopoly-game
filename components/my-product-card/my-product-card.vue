<template>
    <view class="my-product-card">
        <view class="title">
            <view class="left">
                <image class="storeThumb" :src="product.storeThumb" mode="aspectFit"></image>
                <view class="storeName">{{product.store}}</view>
            </view>
            <view class="status">{{product.status}}</view>
        </view>

        <view class="content">
            <view class="thumb-box">
                <image class="thumb" :src="product.thumb" mode="aspectFit"></image>
            </view>
            <view class="text">
                <view class="productName">{{product.name}}</view>
                <view class="productDesc">{{product.desc}}</view>
            </view>
            <view class="right">
                <view class="price">¥{{product.price}}</view>
                <view class="num">x{{product.productAmount}}</view>
            </view>
        </view>

        <view class="bottom">
            <tn-bubble-box class="more" :options="bubbleOptions" position="right">
                <view>更多</view>
            </tn-bubble-box>

            <view class="btns">
                <view class="transport">
                    <TnButton custom-class="btn">查看物流</TnButton>
                </view>

                <view class="comment">
                    <TnButton custom-class="btn">点击评价</TnButton>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import TnBubbleBox from '@/uni_modules/tuniaoui-vue3/components/bubble-box/src/bubble-box.vue'
    import TnButton from '@/uni_modules/tuniaoui-vue3/components/button/src/button.vue'
    defineProps(['product'])

    const bubbleOptions = [{
            text: '收藏',
            icon: 'star-fill'
        },
        {
            text: '分享',
            icon: 'share-triangle'
        },
    ]
</script>

<style lang="scss" scoped>
    .my-product-card {
        display: flex;
        flex-direction: column;
        border-radius: 20rpx;
        background-color: #fff;
    }

    .title {
        font-size: 38rpx;
        padding: 20rpx;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .left {
            display: flex;
            flex-direction: row;

            .storeThumb {
                width: 50rpx;
                height: 50rpx;
                border-radius: 12rpx;
            }

            .storeName {
                margin-left: 15rpx;
                font-weight: bold;
            }
        }

        .status {
            color: red;
        }
    }

    .content {
        padding: 20rpx;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .thumb-box {
            .thumb {
                width: 200rpx;
                height: 200rpx;
                border-radius: 15rpx;
            }
        }

        .text {
            display: flex;
            flex-direction: column;
            margin-left: 15rpx;

            .productName {
                width: 300rpx;
                font-weight: bold;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .productDesc {
                margin-top: 10rpx;
                color: grey;
            }
        }

        .right {
            margin-left: auto;
            padding-left: 30rpx;
            display: flex;
            flex-direction: column;

            .price {
                flex: 0.3;
                text-align: end;
                font-weight: bold;
            }

            .num {
                flex: 0.7;
                text-align: end;
            }
        }
    }

    .bottom {
        padding: 20rpx;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .more {
            display: flex;
            align-items: center;
        }

        .btns {
            display: flex;
            flex-direction: row;

            .transport,
            .comment {
                margin-left: 40rpx;
            }

            .btn {
                color: black;
                background-color: #fff;
                border: 3rpx solid #eee;
                border-radius: 30rpx;
                padding: 15rpx 35rpx;
            }
        }
    }
</style>