<template>
    <view class="home">
        <map class="map" :latitude="latitude" :longitude="longitude" scale="12" :show-compass="true"
            :enable-traffic="true">
            <!-- 按钮容器 -->
            <my-btn-box class="btn-box1" :arr="navList"></my-btn-box>
            <my-btn-box class="btn-box2" :arr="btns"></my-btn-box>

            <!-- 地点详情 -->
            <uni-card class="card" :title="place.title" :thumbnail="place.thumb" :extra="place.extra"
                @click="clickCard">
                <text>{{place.desp}}</text>
            </uni-card>
        </map>

        <!-- 选项卡 -->
        <TnSwitchTab class="switchBar" v-model="currentTabIndex" :tabs="tabs">
            <!-- 商店 -->
            <my-store-card class="store" v-if="currentTabIndex === 0" :arr="fruit"></my-store-card>
            <!-- 周榜 -->
            <my-card class="switchBar-content" v-if="currentTabIndex === 1" :arr="data1"></my-card>
        </TnSwitchTab>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue';

    import TnSwitchTab from '@/uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.vue'
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

    // 
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

    const navList = ref([{
            title: '关于',
            icon: '/static/user/info.png',
            path: '/pages_user/about/about'
        },
        {
            title: '帮助',
            icon: '/static/user/phone.png',
            path: '/pages_user/contact/contact'
        },
        {
            title: '开发者',
            icon: '/static/dev.png',
            path: '/pages_home/location/location'
        }
    ]);

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
    const tabs = ref(['商店', '周榜']);
    const data1 = ref([{
            leftIcon: '/static/logo.png',
            title: 'data1-表单1',
            desc: '',
            rightIcon: '/static/logo.png'
        },
        {
            leftIcon: '/static/logo.png',
            title: 'data1-表单2',
            desc: '',
            rightIcon: '/static/logo.png'
        },
        {
            leftIcon: '/static/logo.png',
            title: 'data1-表单3',
            desc: '',
            rightIcon: '/static/logo.png'
        },
        {
            leftIcon: '/static/logo.png',
            title: 'data1-表单1',
            desc: '',
            rightIcon: '/static/logo.png'
        },
        {
            leftIcon: '/static/logo.png',
            title: 'data1-表单2',
            desc: '',
            rightIcon: '/static/logo.png'
        },
        {
            leftIcon: '/static/logo.png',
            title: 'data1-表单3',
            desc: '',
            rightIcon: '/static/logo.png'
        }
    ]);

    const fruit = ref({
        title: ['水果'],
        list: [{
                name: '西瓜',
                thumb: '/static/logo.png',
                price: 999
            }, {
                name: '西瓜',
                thumb: '/static/logo.png',
                price: 999
            },
            {
                name: '西瓜',
                thumb: '/static/logo.png',
                price: 999
            },
            {
                name: '西瓜',
                thumb: '/static/logo.png',
                price: 999
            }, {
                name: '西瓜',
                thumb: '/static/logo.png',
                price: 999
            }, {
                name: '西瓜',
                thumb: '/static/logo.png',
                price: 999
            },
            {
                name: '西瓜',
                thumb: '/static/logo.png',
                price: 999
            },
            {
                name: '西瓜',
                thumb: '/static/logo.png',
                price: 999
            }
        ],
    });
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100vh;
    }

    .map {
        width: 100%;
        height: 88%;
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
        top: 340rpx;
        right: 0;
        z-index: 5;
        margin: 30rpx;
        padding: 20rpx;
    }

    .card {
        position: absolute;
        bottom: 25rpx;
        left: 0;
        right: 0;
        border-radius: 20rpx;
        z-index: 5;
    }

    .switchBar {
        margin-top: -10rpx;
    }

    .store {
        width: 100%;
        max-width: 600rpx;
        margin: 100rpx auto;
    }
</style>