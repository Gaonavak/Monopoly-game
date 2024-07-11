<template>
    <view class="home">
        <map class="map" :latitude="latitude" :longitude="longitude" scale="12" :show-compass="true"
            :enable-traffic="true">
            <!-- 按钮容器 -->
            <my-btn-box class="btn-box1" :arr="navList"></my-btn-box>
            <my-btn-box class="btn-box2" :arr="btns"></my-btn-box>

            <!-- 地点详情 -->
            <uni-card class="checkIn-card" :title="place.title" :thumbnail="place.thumb" :extra="place.extra"
                @click="clickCard">
                <text>{{place.desp}}</text>
            </uni-card>
        </map>

        <!-- 选项卡 -->
        <TnSwitchTab class="switchBar" v-model="currentTabIndex" :tabs="tabs" active-bg-color="#8CAED1"
            inactive-bg-color="#E1E9F0">
            <!-- 商店 -->
            <view class="store" v-if="currentTabIndex === 0">
                <view class="type-card">
                    <my-store-card :arr="fruit"></my-store-card>
                </view>
                <view class="type-card">
                    <my-store-card :arr="fruit" />
                </view>
            </view>

            <!-- 周榜 -->
            <view class="rank" v-if="currentTabIndex === 1">
                <view class="switchBar_rank">
                    <TnSwitchTab v-model="currentTabIndex_rank" :tabs="tabs_rank" active-bg-color="#FFA726"
                        inactive-bg-color="#E1E9F0">
                        <view class="dayList" v-if="currentTabIndex_rank === 0">
                            <my-rank-card :arr="group1" />
                        </view>
                        <view class="weekList" v-if="currentTabIndex_rank === 1">
                            <my-rank-card :arr="group2" />
                        </view>
                        <view class="monthList" v-if="currentTabIndex_rank === 2">
                            <my-rank-card :arr="group3" />
                        </view>
                    </TnSwitchTab>
                </view>

            </view>
        </TnSwitchTab>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue';

    import TnSwitchTab from '@/uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.vue'

    import {
        navList,
        fruit,
        group1,
        group2,
        group3
    } from '@/data/pages-home';

    // 获取定位
    const getLocation = () => {
        uni.getLocation({
            type: 'gcj02',
            success(res) {
                longitude.value = res.longitude;
                latitude.value = res.latitude;
                uni.showToast({
                    title: '经纬度' + res.longitude + '，' + res.latitude
                })
            },
            fail() {
                uni.showToast({
                    title: '请打开定位，或稍后重试',
                    icon: 'none'
                })
            }
        })
    };

    // 签到
    const checkIn = () => {
        uni.showToast({
            title: '签到',
            icon: 'none'
        });
    }

    // 获取景点信息
    const getPlaceInfo = () => {
        uni.showToast({
            title: '景点的信息',
            icon: 'none'
        });
    }

    // 点击打卡那张卡片
    const clickCard = (type) => {
        switch (type) {
            case 'thumb':
                getPlaceInfo();
                break;
            case 'extra':
                checkIn();
                break;
        };
    };

    // 扫描二维码
    const scanQRCode = () => {
        uni.scanCode({
            success(res) {
                uni.showToast({
                    title: res.scanType,
                    icon: 'none'
                })
            }
        })
    };
    
    // 南澳岛的经纬度
    const longitude = ref(117.062956);
    const latitude = ref(23.434194);

    const place = ref({
        title: '景点',
        thumb: '/static/logo.png',
        extra: '打卡',
        desp: '这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。',
    });

    // 当前选中的标签索引
    const currentTabIndex = ref(0);
    const currentTabIndex_rank = ref(0);
    const tabs = ref(['商店', '周榜']);
    const tabs_rank = ref(['日榜', '周榜', '月榜']);
    const btns = ref([{
            title: '扫描二维码',
            icon: '/static/home/scan.png',
            path: scanQRCode
        },
        {
            title: '重新获取位置',
            icon: '/static/home/relocation.png',
            path: getLocation
        }
    ]);
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100vh;
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
        top: 300rpx;
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

    .store {
        width: 100%;
        max-width: 690rpx;
        margin: 100rpx auto;

        .type-card {
            margin: 110rpx auto;
        }
    }

    .switchBar {
        margin-top: -30rpx;

        .switchBar_rank {
            margin-top: 80rpx;
        }
    }

    .rank {
        width: 100%;
        max-width: 690rpx;
        margin: 0 auto;
    }
</style>