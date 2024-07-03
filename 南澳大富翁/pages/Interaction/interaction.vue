<template>
    <view class="flex-col page">
        <view class="fixed background_2"></view>
        <view class="fixed_2 background_1"></view>
        <view class="fixed_3 background_3"></view>
        
        <!-- 自定义导航栏 -->
        <view class="custom-nav-bar">
          <text class="title">南澳大富翁</text>
        </view>
        
        <scroll-view class="group">
            <view class="flex-col justify-start items-center record">
                <view class="flex-col justify-start items-center section_8">
                    <view class="flex-col justify-start items-center image-wrapper_2">
                        <image class="image_7"
                            src="https://ide.code.fun/api/image?token=66836abcb8c7cd0011a4047c&name=fbc918b25ab2d0d86fea5bd91a5aa597.png" />
                    </view>
                </view>
            </view>
            
            <view class="flex-col justify-start items-center relative point_rank">
                <image class="shrink-0 image_1"
                    src="https://ide.code.fun/api/image?token=66836abcb8c7cd0011a4047c&name=c5dfc17620475b43d42a47e2601ed86b.png" />
                <text class="font text_1 pos">积分排行榜</text>
            </view>
            
            <view class="flex-col justify-start items-center relative game">
                <image class="shrink-0 image"
                    src="https://ide.code.fun/api/image?token=66836abcb8c7cd0011a4047c&name=027750d7a43cfa4b9a42fad8db4e10a8.png" />
                <text class="font text pos_text">游戏赚取积分</text>
            </view>
            
        </scroll-view>
        <view class="flex-col justify-start items-center footer Navigation_Bar">
            <view class="flex-row">
                <image class="equal-division-item_1"
                    src="https://ide.code.fun/api/image?token=66836abcb8c7cd0011a4047c&name=b7e82159e003e0f0745911fc3d53f52c.png"
                    @click="goTohome"
                     />
                <image class="equal-division-item_1 ml-85"
                    src="https://ide.code.fun/api/image?token=66836abcb8c7cd0011a4047c&name=1db5c8775afbc98866d7ec2e7a508ebd.png" 
                    />
                <image class="equal-division-item ml-85"
                    src="https://ide.code.fun/api/image?token=66836abcb8c7cd0011a4047c&name=6ea52567c4a76c972256e91853814d9d.png" 
                    @click="goToperson"
                    />
                    
            </view>
        </view>
        
    </view>
</template>

<script>
    export default {
        methods: {
            goTohome() {
                uni.navigateTo({
                    url: '/pages/Home/home'
                });
            },
            goToperson(){
                uni.navigateTo({
                    url:'/pages/Person/person'
                });
            }
        },
        onUnload() {
            // 清理资源
            if (this.timer) {
              clearTimeout(this.timer);
            }
          }
    }
</script>

<style scoped lang="scss">
    .ml-85 {
        margin-left: 170rpx;
    }

    .page {
        background-color: #ffffff;
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;

        .fixed {
            position: fixed;
            right: -32.96rpx;
            top: -128rpx;
        }
        

        .background_2 {
            background-color: #c7ffbf7a;
            filter: blur(120rpx);
            border-radius: 50%;
            height: 1299.14rpx;
            width: 582.2rpx;
        }

        .fixed_2 {
            position: fixed;
            left: -314rpx;
            top: 66.6rpx;
        }

        .background_1 {
            background-color: #2fff000f;
            filter: blur(40rpx);
            border-radius: 50%;
            height: 1641.02rpx;
            width: 708.08rpx;
        }

        .fixed_3 {
            position: fixed;
            right: -260rpx;
            top: 671.46rpx;
        }

        .background_3 {
            background-color: #f5ff3830;
            filter: blur(240rpx);
            border-radius: 50%;
            height: 1104.52rpx;
            width: 510.26rpx;
        }
        .custom-nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100px; /* 根据需要调整高度 */
          background-color: #ffffff;
          display: flex;
          align-items:  flex-end;
          justify-content: center;
          z-index: 1000;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .content {
            margin-top: 44px; /* 根据导航栏高度调整 */
            padding: 16px;
        }
        
        .footer {
            position: relative;
            .home {
            width: 70rpx;
            height: 60rpx;
            }
            .interaction {
            width: 72rpx;
            height: 62rpx;
            }
            .person {
            width: 62rpx;
            height: 62rpx;
            }
        }
        .group {
            position: relative;
            flex: 1 1 0;
            margin-top: 100px; /* 确保内容从导航栏下方开始 */
            .record {
                margin: 292rpx 34rpx 0 24rpx;
                padding: 50rpx 0 30rpx;
                background-color: #0a0d10;
                overflow: hidden;

                .section_8 {
                    padding: 40rpx 0;
                    background-image: url('https://ide.code.fun/api/image?token=66836abcb8c7cd0011a4047c&name=ce3663ca8d964fa7bd3c46ae21d176fc.png');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    width: 416rpx;

                    .image-wrapper_2 {
                        padding: 40rpx 0;
                        background-image: url('https://ide.code.fun/api/image?token=66836abcb8c7cd0011a4047c&name=e0444e6d7495a2c65e23abfef851fedc.png');
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                        width: 336rpx;

                        .image_7 {
                            width: 256rpx;
                            height: 256rpx;
                        }
                    }
                }
            }

            .point_rank {
                margin-top: -700rpx;
                background-color: #ffffff;
                border-radius: 32rpx;
                width: 572rpx;
                filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
                overflow: hidden;
                transform: translate(15%);

                .image_1 {
                    width: 572rpx;
                    height: 138rpx;
                }

                .text_1 {
                    color: #ffeb3be8;
                    line-height: 36.6rpx;
                }

                .pos {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            .game {
                margin-top: 750rpx;
                background-color: #ffffff;
                border-radius: 32rpx;
                filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
                overflow: hidden;
                background-image: url('https://ide.code.fun/api/image?token=66836abcb8c7cd0011a4047c&name=027750d7a43cfa4b9a42fad8db4e10a8.png');
                background-size: 100% 100%;
                width: 572rpx;
                transform: translate(15%);
                                
                .image {
                    width: 572rpx;
                    height: 138rpx;
                    border-radius: 32rpx;
                }

                .text {
                    color: #ff8d1a;
                }

                .pos_text {
                    position: absolute;
                    left: 50%;
                    bottom: 45.32rpx;
                    transform: translateX(-50%);
                }
            }

            .font {
                font-size: 40rpx;
                font-family: AlimamaShuHeiTi;
                letter-spacing: 6rpx;
                line-height: 37.08rpx;
            }
        }

        .footer {
            position: relative;

            .equal-division-item_1 {
                width: 72rpx;
                height: 62rpx;
            }

            .equal-division-item {
                width: 62rpx;
                height: 62rpx;
            }
        }

        .Navigation_Bar {
            position: fixed;
            /* 固定位置 */
            bottom: 0;
            /* 定位到视窗底部 */
            left: 0;
            /* 定位到视窗左边 */
            width: 100%;
            /* 宽度占满视窗 */
            padding: 29rpx 0 69rpx;
            /* 内边距 */
            background-color: #ffffff;
            /* 背景颜色 */
            filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
            /* 投影效果 */
            display: flex;
            /* 弹性布局 */
            justify-content: center;
            /* 子元素居中对齐 */
            z-index: 1000;
            /* 确保导航栏在顶层 */
        }
    }
</style>