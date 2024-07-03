<template>
    <view>
        <view class="flex-col page">
            
        <!-- 背景颜色 -->
        <view class="fixed background_1"></view>
        <view class="fixed_1 background_3"></view>
        <view class="fixed_3 background_4"></view>
        <view class="fixed_5 background_2"></view>
        
        <!-- 自定义导航栏 -->
        <view class="custom-nav-bar">
          <text class="title">南澳大富翁</text>
        </view>
        
        <!-- body视图 -->
        <view class="flex-row flex-1 relative body">
              
            <image
              class="setting setting_pos"
              src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=a0ce5a9dc255911c2a96a08cc1c2817d.png"
            />
            <image
              class="avatar avatar_pos"
              src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=6891ce38066e15eb6916a20f1c9ea638.png"
            />
            <text class="ID_pos text">账号：</text>
            
            <!-- group1视图 -->
            <view class="group1 group1_pos text">
              <view class="flex-col items-center checkin_record">
                <image
                  class="shrink-0 favorite_image"
                  src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=6c03218038cabbd8dacb912bdd4a59cc.png"
                />
                <text class="favorite_text">打卡点</text>
              </view>
              <view class="flex-col items-center track text">
                <image
                  class="shrink-0 favorite_image"
                  src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=2d52af6484a68c4fd39c101782373a36.png"
                />
                <text class="favorite_text">足迹</text>
              </view>
              <view class="flex-col items-center favorite">
                <image
                  class="shrink-0 favorite_image"
                  src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=215b2e7bea0c34a3fdde639aaaaf089c.png"
                />
                <text class="favorite_text">收藏</text>
              </view>
              <view class="flex-row justify-evenly point">
                <image
                  class="self-center point_imag"
                  src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=47534c4708b0d66b9a71f7a61662e49b.png"
                />
                <text class="self-start text point_text">积分</text>
              </view>
              <view class="flex-row justify-evenly shopping">
                <image
                  class="self-center aftermarket_image"
                  src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=9ae50105eab3a97f4e29915964cd6da2.png"
                />
                <text class="self-start text shopping_text">商城</text>
              </view>
              <view class="flex-row aftermarket">
                <image
                  class="self-center aftermarket_image"
                  src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=f0320231a2d0c5de3c42d6f4406892d3.png"
                />
                <text class="self-start text aftermarket_text ml-4">售后</text>
              </view>
            </view>
            
            <!-- group2视图 -->
            <view class="group2 group2_pos">
                <view class="flex-row justify-between feedback">
                    <image
                      class="self-center image_11"
                      src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=07427c4b9f6b6add62b5ec9315742224.png"
                    />
                    <text class="self-start font_3 text_7">用户反馈</text>
                </view>
                <view class="flex-row justify-between about">
                  <image
                    class="self-center image_1"
                    src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=315cf199b90e81fa4575caf9d0a5e9c7.png"
                  />
                  <text class="self-start font_3 text_8">关于</text>
                </view>
                <view class="flex-row justify-between contact">
                   <image
                    class="self-center image_1"
                    src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=2744f4f952d4fa4d25d99346f8b77484.png"
                   />
                  <text class="self-start font_3 text_10">联系我们</text>
                </view>
                <view class="flex-row justify-between items-center clear_cache">
                  <image
                    class="image_1"
                    src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=1252345c343b7f20ca45893e5affcb1e.png"
                  />
                  <text class="font_3 text_9">清理缓存</text>
                </view>   
            </view>          
         
          </view>     
   
               
        <!-- 底部导航栏 -->
        <view class="flex-col justify-start items-center footer Navigation_Bar">
          <view class="flex-row">
            <image
              class="home"
              src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=66538f53d9a154a8550a55469782ac3f.png"
              @click="goTohome"
            />
            <image
              class="interaction ml-86"
              src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=025fd3128b18bd6108c443da10d2f1ad.png"
              @click="goTointeraction"
            />
            <image
              class="person ml-86"
              src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=1b529add50cee529631b588149ae552e.png"
            />
          </view>
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
            goTointeraction(){
                uni.navigateTo({
                    url:'/pages/Interaction/interaction'
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

<style lang="scss">

.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .fixed {
    position: fixed;
    left: -246rpx;
    top: 82.44rpx;
  }
  .background_1 {
    background-color: #2fff000f;
    filter: blur(40rpx);
    border-radius: 50%px 50%px 0rpx 0rpx;
    height: 187.12rpx;
    width: 607.54rpx;
  }
  .fixed_1 {
    position: fixed;
    right: 54.78rpx;
    top: -114rpx;
  }
  .background_3 {
    background-color: #c7ffbf7a;
    filter: blur(120rpx);
    border-radius: 50%;
    height: 1311.42rpx;
    width: 499.54rpx;
  }
  .fixed_3 {
    position: fixed;
    right: -140rpx;
    top: 693.02rpx;
  }
  .background_4 {
    background-color: #f5ff3830;
    filter: blur(240rpx);
    border-radius: 50%;
    height: 1114.96rpx;
    width: 437.82rpx;
  }
  .fixed_5 {
    position: fixed;
    left: -246rpx;
    top: 269.56rpx;
  }
  .background_2 {
    background-color: #2fff000f;
    filter: blur(40rpx);
    border-radius: 0rpx 0rpx 50%px 50%px;
    height: 1469.4rpx;
    width: 607.54rpx;
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
  
  .title {
    font-size: 20px;
    color: #333333;
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
  
  .body {
    padding: 32rpx 0 1000rpx;
    margin-top: 100px; /* 确保内容从导航栏下方开始 */
    // padding-bottom: 50px; /* 确保内容在底部导航栏上方结束 */
    overflow-y: auto;
    .setting {
      width: 48rpx;
      height: 48rpx;
    }
    .setting_pos {
      position: absolute;
      right: 28rpx;
      top: 32rpx;
    }
    .avatar {
      width: 200rpx;
      height: 200rpx;
    }
    .avatar_pos {
      position: absolute;
      left: 50%;
      top: 40rpx;
      transform: translateX(-50%);
    }
    .ID_pos {
      position: absolute;
      left: 236.84rpx;
      top: 265.22rpx;
    }
    .text {
      font-size: 24rpx;
      font-family: SimHei;
      letter-spacing: 6rpx;
      line-height: 22.12rpx;
      color: #000000;
    }
    .group1 {
      padding: 0 65rpx;
      height: 195rpx;
      display: grid;
      grid-template-rows: repeat(2, minmax(0, 1fr));
      grid-template-columns: repeat(3, minmax(0, 1fr));
      row-gap: 29rpx;
      column-gap: 102rpx;
      .checkin_record {
        padding-bottom: 13.06rpx;
        background-color: #ff573300;
        overflow: hidden;
      }
      .track {
        padding-bottom: 12.92rpx;
        background-color: #ff573300;
        overflow: hidden;
      }
      .favorite_image {
        width: 40rpx;
        height: 40rpx;
      }
      .favorite_text {
        margin-top: 18rpx;
      }
      .favorite {
        padding: 6.04rpx 0 6.88rpx;
        background-color: #ff573300;
        overflow: hidden;
      }
      .point {
        padding: 17rpx;
        background-color: #ff8d1a;
        border-radius: 32rpx;
        filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
        overflow: hidden;
        .point_imag {
          width: 40rpx;
          height: 36rpx;
        }
        .point_text {
          margin-top: 12.22rpx;
          line-height: 21.94rpx;
        }
      }
      .shopping {
        padding: 17rpx 17.04rpx;
        background-color: #a5d63f;
        border-radius: 32rpx;
        filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
        overflow: hidden;
        .shopping_text {
          margin-top: 18.04rpx;
          color: #383838;
        }
      }
      .aftermarket {
        padding: 11.02rpx 0 19.98rpx;
        background-color: #2a82e4a6;
        border-radius: 32rpx;
        filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
        overflow: hidden;
        .aftermarket_text {
          margin-top: 17.82rpx;
          line-height: 22.32rpx;
        }
      }
      .aftermarket_image {
        width: 42rpx;
        height: 42rpx;
      }
    }
    .group1_pos {
      position: absolute;
      left: 0;
      right: 0;
      top: 338rpx;
    }
    .group2 {
      padding: 0 65rpx;
      height: 224rpx;
      display: grid;
      grid-template-rows: repeat(2, minmax(0, 1fr));
      grid-template-columns: repeat(2, minmax(0, 1fr));
      row-gap: 66rpx;
      column-gap: 10rpx;
      .feedback {
        padding: 16rpx 54.24rpx 16rpx 56rpx;
        background-color: #ffffff;
        border-radius: 32rpx;
        filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
        overflow: hidden;
        .image_11 {
          width: 56rpx;
          height: 48rpx;
        }
        .text_7 {
          line-height: 29.88rpx;
        }
      }
      .about {
        padding: 12rpx 56rpx;
        background-color: #ffffff;
        border-radius: 32rpx;
        filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
        overflow: hidden;
        .text_8 {
          margin-right: 49.5rpx;
          margin-top: 5.76rpx;
          line-height: 28.76rpx;
        }
      }
      .font_3 {
        font-size: 32rpx;
        font-family: SimHei;
        line-height: 29.62rpx;
        color: #000000;
      }
      .contact {
        padding: 12rpx 52rpx;
        background-color: #ffffff;
        border-radius: 32rpx;
        filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
        overflow: hidden;
        .text_10 {
          margin-right: 6.62rpx;
          margin-top: 5.26rpx;
        }
      }
      .image_1 {
        width: 56rpx;
        height: 56rpx;
      }
      .clear_cache {
        padding: 4rpx 54.38rpx 20rpx 60rpx;
        background-color: #ffffff;
        border-radius: 32rpx;
        filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
        overflow: hidden;
        .text_9 {
          line-height: 29.76rpx;
        }
      }
    }
    .group2_pos {
      position: absolute;
      left: 0rpx;
      right: 0rpx;
      top: 632rpx;
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
