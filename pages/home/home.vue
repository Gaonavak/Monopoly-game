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

            <view class="card-box">
                <!-- 景点详情和题目 -->
                <view v-if="showCard"
                    class="card-place">
                    <my-place-card :title="place.title"
                        :thumb="place.thumb"
                        :desc="place.desc"
                        :gif="place.gif"
                        :quesTitle="place.quesTitle"
                        :ques="place.desc"
                        @close="closePlaceAndTask" />
                </view>
            </view>
        </map>

        <!-- 选项卡 -->
        <TnSwitchTab class="switchBar"
            v-model="currentTabIndex"
            :tabs="tabs"
            active-bg-color="#8CAED1"
            inactive-bg-color="#E1E9F0">

            <!-- 榜单 -->
            <view class="rank"
                v-if="currentTabIndex === 0">
                <view class="switchBar_rank">
                    <TnSwitchTab v-model="currentTabIndex_rank"
                        :tabs="tabs_rank"
                        active-bg-color="#FFA726"
                        inactive-bg-color="#FFD392">
                        <view class="ranklist"
                            v-if="currentTabIndex_rank === 0">
                            <my-rank-card :arr="group1" />
                        </view>
                        <view class="ranklist"
                            v-if="currentTabIndex_rank === 1">
                            <my-rank-card :arr="group2" />
                        </view>
                        <view class="ranklist"
                            v-if="currentTabIndex_rank === 2">
                            <my-rank-card :arr="group3" />
                        </view>
                    </TnSwitchTab>
                </view>
            </view>

            <!-- 商店 -->
            <view class="store"
                v-if="currentTabIndex === 1">
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
        onMounted,
        getCurrentInstance
    } from 'vue';

    import TnSwitchTab from '@/uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.vue'
    import TnPopup from '@/uni_modules/tuniaoui-vue3/components/popup/src/popup.vue'
    import MyPlaceCard from '@/components/my-place-card/my-place-card.vue'

    import {
        polyline,
        fruit,
        group1,
        group2,
        group3,
        place
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
        showCard,
        closePlaceAndTask,
        isGetLocation,
        getAuthorizeInfo,
        getLocation,
        moveToUserLocation,
        getLocationDetail,
        regionchange,
        saveAddress,
        updateMarkers,
        clickMap,
        onMarkerTap
    } from '@/pages/home/map.js';

    const isPlaceCardVisiable = ref(true)
    const handleClose = (res) => {
        isPlaceCardVisiable.value = res;
    }
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
    const tabs = ref(['榜单', '商店']);
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

    .btn-box2 {
        position: absolute;
        top: 0rpx;
        right: 0;
        z-index: 5;
        margin: 30rpx;
        padding: 20rpx;
    }

    .card-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: absolute;
        bottom: 40rpx;
        border-radius: 20rpx;
        z-index: 5;

        // 拥有收藏和打卡按钮卡片
        .card-place {
            width: 100%;
            max-width: 690rpx;
        }

        // 任务卡
        .card-task {
            width: 100%;
            max-width: 690rpx;
            margin-top: 30rpx;
        }
    }


    // 大选项卡，子内容是 rank 和 store
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

    // 排行榜的日周月榜切换卡片
    .switchBar_rank {
        width: 100%;
        max-width: 690rpx;
        margin-top: 60rpx;
    }

    // 商店货物的种类卡片
    .type-card {
        width: 100%;
        max-width: 690rpx;
        margin-top: 90rpx;
    }
</style>