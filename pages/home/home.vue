<template>
    <view class="home">

        <!-- map位置 -->
        <map class="map"
            :latitude="latitude"
            :longitude="longitude"
            :scale="12"
            :enable-traffic="true"
            :markers="markers"
            :polyline="polyline"
            @regionchange="regionchange"
            @tap="clickMap"
            @markertap="onMarkerTap">

            <my-btn-box class="btn-box2"
                :arr="btns">
            </my-btn-box>
        </map>

        <!-- 地点详情 -->
        <uni-card v-if="showCard"
            class="checkIn-card"
            :title="cardData.title"
            :thumbnail="cardData.thumb"
            :extra="cardData.extra">
            <view class="card-content">
                <text>{{ cardData.desp }}</text>
                <uni-icons type="close"
                    class="close-icon"
                    @click="closeCard" />
            </view>
        </uni-card>
        
        <TnPopup v-model="showPopup"
            :overlay-closeable="true"
            radius="16"
            open-direction='bottom'
            height="800">
            <view class="tn-p-lg tn-white_bg tn-radius center checkIn-card"
                :title="cardData.title"
                :thumbnail="cardData.thumb"
                :extra="cardData.extra">
            </view>
        </TnPopup>

        <!-- 选项卡 -->
        <TnSwitchTab class="switchBar"
            v-model="currentTabIndex"
            :tabs="tabs"
            active-bg-color="#8CAED1"
            inactive-bg-color="#E1E9F0">
            
            <!-- 榜单 -->
            <view class="rank" v-if="currentTabIndex === 0">
                <view class="switchBar_rank">
                    <TnSwitchTab v-model="currentTabIndex_rank" :tabs="tabs_rank" active-bg-color="#FFA726"
                        inactive-bg-color="#FFD392">
                        <view class="ranklist" v-if="currentTabIndex_rank === 0">
                            <my-rank-card :arr="group1" />
                        </view>
                        <view class="ranklist" v-if="currentTabIndex_rank === 1">
                            <my-rank-card :arr="group2" />
                        </view>
                        <view class="ranklist" v-if="currentTabIndex_rank === 2">
                            <my-rank-card :arr="group3" />
                        </view>
                    </TnSwitchTab>
                </view>
            </view>

            <!-- 商店 -->
            <view class="store" v-if="currentTabIndex === 1">
                <view class="type-card">
                    <my-store-card :arr="fruit" />
                </view>
                <view class="type-card">
                    <my-store-card :arr="fruit" />
                </view>
            </view>
        </TnSwitchTab>
    </view>
</template>

<script setup>
    //引用文件
    import {
        ref,
        onMounted
    } from 'vue';

    import TnSwitchTab from '@/uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.vue'

    import TnPopup from '@/uni_modules/tuniaoui-vue3/components/popup/src/popup.vue'

    import {
        polyline,
        fruit,
        group1,
        group2,
        group3
    } from '@/data/pages-home';

    import {
        scanQRCode,
        fetchUserData,
        openPoints,
        check_in
    } from '@/pages/home/QR.js';

    import {
        longitude,
        latitude,
        markers,
        userLatitude,
        userLongitude,
        addressInfoRecomd,
        currentMarkerId,
        cardData,
        showPopup,
        showCard,
        isGetLocation,
        getAuthorizeInfo,
        getLocation,
        moveToUserLocation,
        getLocationDetail,
        regionchange,
        saveAddress,
        updateMarkers,
        clickMap,
        onMarkerTap,
        closeCard
    } from '@/pages/home/map.js';

    // 合并 onMounted 钩子
    onMounted(async () => {
        isGetLocation(); // 调用获取位置的函数
        await fetchUserData(); // 调用获取用户数据的函数
    });


    const btns = ref([{
            title: '扫描二维码',
            icon: '/static/home/scan.png',
            path: scanQRCode // 这里不应该调用函数，只需要指定函数名即可
        },
        {
            title: '重新获取位置',
            icon: '/static/home/relocation.png',
            path: getLocation // 同样不要调用函数，只需指定函数名
        }
    ]);

    // 当前选中的标签索引
    const currentTabIndex = ref(0);
    const currentTabIndex_rank = ref(0);
    const tabs = ref(['商店', '周榜']);
    const tabs_rank = ref(['日榜', '周榜', '月榜']);

</script>

<style lang="scss"
    scoped>
    .home {
        width: 100%;
        height: 100vh;
        background-color: #8CAED1;
    }

    .map {
        width: 100%;
        height: 92%;
        position: relative;
    }

    .btn-box1 {
        position: absolute;
        top: 0rpx;
        right: 0;
        z-index: 5;
        margin: 30rpx;
        padding: 20rpx;
    }

    .btn-box2 {
        position: absolute;
        top: 0rpx;
        right: 0;
        z-index: 5;
        margin: 30rpx;
        padding: 20rpx;
    }

    .checkIn-card {
        position: absolute;
        bottom: 40rpx;
        left: 0;
        right: 0;
        border-radius: 20rpx;
        z-index: 5;
    }

    .switchBar {
        margin-top: -30rpx;
    }

    .rank,
    .store {
        display: flex;
        flex-direction: column;
        align-items: center;

        &:last-child {
            padding-bottom: 20rpx;
        }
    }

    .switchBar_rank {
        width: 100%;
        max-width: 690rpx;
        margin-top: 60rpx;
    }

    .type-card {
        width: 100%;
        max-width: 690rpx;
        margin-top: 90rpx;
    }

    .checkIn-card {
        position: absolute;
        bottom: 50rpx;
        left: 0;
        right: 0;
        border-radius: 20rpx;
        z-index: 5;
    }

    .card-content {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10px;
    }

    .close-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        color: #999;
        cursor: pointer;
    }
</style>