<template>
    <view>
        <view class="flex-col page">
            
          <!-- 背景颜色 -->
          <view class="fixed background_1"></view>
          <view class="fixed_1 background_2"></view>
          <view class="fixed_4 background_3"></view>
          
         <!-- 自定义导航栏 -->
         <view class="custom-nav-bar">
           <text class="title">南澳大富翁</text>
         </view>
         
          <!-- 中间body区域 -->
          <view class="flex-col flex-1 relative body">
              
         <view class="flex-col justify-start  relative group">
           <view class="flex-row justify-between">
             <image
               class="anchor_point"
               src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=f0d7bc6bdac4dea73eee32d3e029f9f5.png"
             />
             <view class="flex-row">
               <image
                 class="QR_code"
                 src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=dafefe0dcb9de25e44d7df0742892c3b.png"
               />
               <image
                 class="refresh refresh_pos"
                 src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=a280160fc35472176774e5b07448abd8.png"
               />
             </view>
           </view>
         </view>
              
          <!-- map -->              
            <image
              class="shrink-0 self-center mao"
              src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=3a5091cc19230afb5d6f8147ae14818b.png"
            />
            
            <!-- 打卡 -->
            <view class="flex-col justify-start items-center self-center relative check_in">
              <image
                class="shrink-0 check_in_image"
                src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=1d71aec5f39166ac5e3ac685f1b6d549.png"
              />
              <text class="text check_in_text">打卡</text>
            </view>
            
        
          </view>
          
          <!-- 底部导航栏 -->
          <view class="flex-col justify-start items-center footer Navigation_Bar">
            <view class="flex-row">
              <image
                class="home"
                src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=4e1a8cb7402f3d58e8001661d467ebf6.png"
              />
              <image
                class="interaction ml-86"
                src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=025fd3128b18bd6108c443da10d2f1ad.png"
                @click="goTointeraction"
              />
              <image
                class="person ml-86"
                src="https://ide.code.fun/api/image?token=6683b6f7b8c7cd0011a41955&name=173f375e23b9923f949bb71774f9e8cb.png"
                @click="goToPerson"
              />
            </view>
          </view>
          
        </view>   
    </view>
</template>

<script>
    export default {
        methods: {
            goToPerson() {
                uni.navigateTo({
                    url: '/pages/Person/person'
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
    right: -142rpx;
    top: 639.56rpx;
  }
  .background_1 {
    background-color: #f5ff3830;
    filter: blur(240rpx);
    border-radius: 50%;
    height: 1060.44rpx;
    width: 426.26rpx;
  }
  .fixed_1 {
    position: fixed;
    left: -214rpx;
    top: 243.16rpx;
  }
  .background_2 {
    background-color: #2fff000f;
    filter: blur(40rpx);
    border-radius: 0rpx 0rpx 50%px 50%px;
    height: 1391.2rpx;
    width: 591.5rpx;
  }
  .fixed_4 {
    position: fixed;
    right: 47.66rpx;
    top: -128rpx;
  }
  .background_3 {
    background-color: #c7ffbf7a;
    filter: blur(120rpx);
    border-radius: 50%;
    height: 1247.28rpx;
    width: 486.34rpx;
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
      
  .body {
    padding: 30rpx 0 156rpx;
    overflow-y: auto;
    margin-top: 100px; /* 确保内容从导航栏下方开始 */
    .group {
      position: sticky; /* 固定在顶部 */
      top: 0;
      margin: 0 34rpx; /* 左右间距 */
      padding: 10rpx 0; /* 上下内间距 */
      z-index: 10; /* 确保在其他内容之上 */
    }
  
    .anchor_point {
      width: 22rpx;
      height: 60rpx;
    }
  
    .QR_code {
      width: 68rpx;
      height: 60rpx;
    }
  
    .refresh {
      width: 60rpx;
      height: 60rpx;
    }
  
    .refresh_pos {
      margin-left: 22rpx;
    }
  
    .mao {
      margin-top: 50rpx; /* 设置与上方元素的间距 */
      width: 100vw;
      height: 105.3333vw;
    }   
  
    .check_in {
      margin-top: 50rpx; /* 设置与上方元素的间距 */
      background-color: #ffffff;
      border-radius: 32rpx;
      filter: drop-shadow(0rpx 4rpx 4rpx #00000040);
      overflow: hidden;
      width: 572rpx;
    }
  
    .check_in_image {
      width: 572rpx;
      height: 138rpx;
    }
  
    .text {
      color: #ffffff;
      font-size: 40rpx;
      font-family: AlimamaShuHeiTi;
      line-height: 36.04rpx;
      letter-spacing: 6rpx;
    }
  
    .check_in_text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
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
