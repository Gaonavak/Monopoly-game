<template>
    <view class="about">
        <view class="logo-container">
            <image class="logo" src="https://0.z.wiki/autoupload/20240714/mIJR/1683X2048/logo-hello.png?type=ha" mode="widthFix"></image>
        </view>
        <view class="title">三下乡-大富翁</view>
        <view class="description">
            我们尽可能提供最优质的服务。
        </view>
        <view class="version">版本号: 1.0.0</view>
        <view class="developer">开发者: 张三</view>
        <view class="email">邮箱: zhangsan@example.com</view>

        <TnFooter class="footer" content="Copyright © 2024 汕头大学-三下乡-科技队" offset-bottom="30rpx" />


    </view>
</template>

<script setup>
    import TnFooter from '@/uni_modules/tuniaoui-vue3/components/footer/src/footer.vue';
</script>

<style lang="scss" scoped>
    .about {
        width: 100%;
        min-height: 100vh;
        background: $bg-base;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .logo-container {
        margin-top: 200rpx;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        .logo {
            width: 100px;
            height: 100px;
        }
    }

    .title {
        margin-top: 50rpx;
        font-size: 2em;
        margin-bottom: 10px;
    }

    .description {
        margin-top: 30rpx;
        font-size: 1.2em;
        margin-bottom: 10px;
    }

    .version {
        margin-top: 50rpx;
        font-size: 1em;
        margin-bottom: 5px;
    }

    .developer,
    .email {
        margin-top: 20rpx;
        font-size: 1em;
        margin-bottom: 5px;
    }
</style>