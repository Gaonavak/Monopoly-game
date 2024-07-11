<template>
    <view class="home">

        <!-- map位置 -->
        <map class="map"
            :latitude="latitude"
            :longitude="longitude"
            :scale="12"
            :show-compass="true"
            :enable-traffic="true"
            :markers="markers"
            :polyline="polyline"
            @regionchange="regionchange"
            @tap="clickMap">

            <!-- 按钮容器 -->
            <my-btn-box class="btn-box1"
                :arr="navList"></my-btn-box>
            <my-btn-box class="btn-box2"
                :arr="btns"></my-btn-box>

            地点详情
            <uni-card class="checkIn-card"
                :title="place.title"
                :thumbnail="place.thumb"
                :extra="place.extra"
                @click="clickCard">
                <text>{{place.desp}}</text>
            </uni-card>

        </map>


        <!-- 选项卡 -->
        <TnSwitchTab class="switchBar"
            v-model="currentTabIndex"
            :tabs="tabs"
            active-bg-color="#8CAED1"
            inactive-bg-color="#E1E9F0">
            <!-- 商店 -->
            <view class="store"
                v-if="currentTabIndex === 0">
                <view class="type-card">
                    <my-store-card :arr="fruit"></my-store-card>
                </view>
                <view class="type-card">
                    <my-store-card :arr="fruit" />
                </view>
            </view>

            <!-- 周榜 -->
            <view class="rank"
                v-if="currentTabIndex === 1">
                <view class="switchBar_rank">
                    <TnSwitchTab v-model="currentTabIndex_rank"
                        :tabs="tabs_rank"
                        active-bg-color="#FFA726"
                        inactive-bg-color="#E1E9F0">
                        <view class="dayList"
                            v-if="currentTabIndex_rank === 0">
                            <my-rank-card :arr="group1" />
                        </view>
                        <view class="weekList"
                            v-if="currentTabIndex_rank === 1">
                            <my-rank-card :arr="group2" />
                        </view>
                        <view class="monthList"
                            v-if="currentTabIndex_rank === 2">
                            <my-rank-card :arr="group3" />
                        </view>
                    </TnSwitchTab>
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

    import {
        navList,
        fruit,
        group1,
        group2,
        group3
    } from '@/data/pages-home';


    //地图的信息与功能
    // 定义地图相关的全局变量
    const longitude = ref(117.062956);
    const latitude = ref(23.434194);
    const userLatitude = ref(0); // 用户当前位置的纬度
    const userLongitude = ref(0); // 用户当前位置的经度
    const currentMarkerId = ref(null); // 记录当前标记点的 ID
    const markers = ref([]); // 地图上的标记点数组
    const polyline = ref([{
        points: [{
                latitude: 23.4299,
                longitude: 116.9472
            },
            {
                latitude: 23.4160,
                longitude: 116.9732
            },
            {
                latitude: 23.4178,
                longitude: 116.9947
            },
            {
                latitude: 23.4109,
                longitude: 117.0344
            }
        ],
        color: '#FF0000DD',
        width: 2,
        dottedLine: true
    }]); // 地图上的路线
    const addressInfoRecomd = ref(''); // 推荐地址详细信息  
    // const address = ref('');//用于标记点判断的

    // 页面加载后执行的操作
    onMounted(() => {
        // 页面加载时检查是否获得定位权限
        isGetLocation();
    });

    // 检查定位权限
    const isGetLocation = (a = "scope.userLocation") => {
        uni.getSetting({
            success(res) {
                console.log(res);
                if (!res.authSetting[a]) {
                    // 如果没有授权，则请求授权
                    getAuthorizeInfo(a);
                } else {
                    // 如果已经授权，获取地理位置信息
                    getLocation();
                }
            }
        });
    };
    // 请求获取地理位置信息的授权
    const getAuthorizeInfo = (a = "scope.userLocation") => {
        uni.authorize({
            scope: a,
            success() {
                // 如果允许授权，获取地理位置信息
                getLocation();
            }
        });
    };

    // 获取定位信息
    const getLocation = () => {
        console.log('现在在获取地址信息');
        uni.getLocation({
            type: 'gcj02',
            success: (res) => {
                console.log(res);
                latitude.value = res.latitude;
                longitude.value = res.longitude;
                userLatitude.value = res.latitude;
                userLongitude.value = res.longitude;
                // 更新标记点
                updateMarkers();
                // 获取地理位置详情信息
                getLocationDetail();
                // 移动地图到用户位置
                moveToUserLocation();
            }
        });
    };
    // 移动地图到用户位置
    const moveToUserLocation = () => {
        const mapCtx = uni.createMapContext("mapSelected"); // 创建 map 的上下文对象
        mapCtx.moveToLocation({
            latitude: userLatitude.value,
            longitude: userLongitude.value,
            success: (res) => {
                console.log(res);
                // 获取到新的地理位置信息
                getLocationDetail();
            },
            fail: (err) => {
                console.error("移动地图失败：", err);
            }
        });
    };
    // 根据经纬度获取详细的地址信息
    const getLocationDetail = () => {
        uni.request({
            header: {
                "Content-Type": "application/text"
            },
            url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude.value + ',' + longitude
                .value +
                '&key=XOXBZ-MZWWD-CDX4H-PONXN-UA5PJ-D7FJN',
            success: (re) => {
                // 成功获取到地理位置详细信息
                console.log('到这里了');
                console.log(re);
                if (re.statusCode == 200) {
                    addressInfoRecomd.value = re.data.result.formatted_addresses.recommend;
                    // addressInfo.value = re.data.result.address_reference.town.title + re.data.result
                    //     .address_reference.street.title + re.data.result.address_reference.landmark_l2
                    //     .title;
                    // address.value = re.data.result.address_component.nation + re.data.result
                    //     .address_component.province + re.data.result.address_component.city + re.data
                    //     .result.address_component.district + re.data.result.address_component.street ;
                } else {
                    uni.showToast({
                        title: '获取地理位置失败，请重试',
                        icon: "none"
                    });
                }
            }
        });
    };
    // 根据地图滑动更新地理位置信息
    const regionchange = (e) => {
        console.log(e);
        if (e.type === 'end' && (e.causedBy === 'scale' || e.causedBy === 'drag')) {
            const mapCtx = uni.createMapContext("mapSelected"); // 创建 map 的上下文对象
            mapCtx.getCenterLocation({
                success: (res) => {
                    console.log(res);
                    latitude.value = res.latitude;
                    longitude.value = res.longitude;
                    getLocationDetail();
                }
            });
        }
    };
    // 保存地址信息到数据库（即用户收藏）
    const saveAddress = async () => {
        try {
            const db = uniCloud.database();
            const collection = db.collection('address');

            // 定义要保存的数据
            const data = {
                latitude: latitude.value,
                longitude: longitude.value,
                address: address.value
            };

            // 添加数据到数据库
            let res = await collection.add(data);

            // 显示成功提示
            uni.showModal({
                content: '数据上传成功：' + JSON.stringify(res),
                showCancel: false
            });
        } catch (error) {
            // 错误处理
            console.error("上传数据时出错：", error);
            uni.showModal({
                content: '上传数据失败，请重试。',
                showCancel: false
            });
        }
    };

    // 更新标记点
    const updateMarkers = () => {
        console.log('开始更新标记点');
        markers.value = [{
                id: 0,
                latitude: userLatitude.value,
                longitude: userLongitude.value,
                iconPath: 'https://hellouniapp.dcloud.net.cn/static/location.png',
                width: 20,
                height: 20,
                callout: {
                    content: 'me',
                    color: '#ff0000',
                    fontSize: 12,
                    borderRadius: 5,
                    bgColor: '#ffffff',
                    padding: 5,
                    display: 'ALWAYS'
                }
            },
            {
                id: 1,
                latitude: 23.4299,
                longitude: 116.9472,
                iconPath: 'https://hellouniapp.dcloud.net.cn/static/location.png',
                width: 20,
                height: 20,
                callout: {
                    content: '长山尾灯塔',
                    color: '#00aaff',
                    fontSize: 12,
                    borderRadius: 5,
                    bgColor: '#ffffff',
                    padding: 5,
                    display: 'ALWAYS'
                }
            },
            {
                id: 2,
                latitude: 23.4160,
                longitude: 116.9732,
                iconPath: 'https://hellouniapp.dcloud.net.cn/static/location.png',
                width: 20,
                height: 20,
                callout: {
                    content: '石潭寺',
                    color: '#00aaff',
                    fontSize: 12,
                    borderRadius: 5,
                    bgColor: '#ffffff',
                    padding: 5,
                    display: 'ALWAYS'
                }
            },
            {
                id: 3,
                latitude: 23.4178,
                longitude: 116.9947,
                iconPath: 'https://hellouniapp.dcloud.net.cn/static/location.png',
                width: 20,
                height: 20,
                callout: {
                    content: '标记点3',
                    color: '#00aaff',
                    fontSize: 12,
                    borderRadius: 5,
                    bgColor: '#ffffff',
                    padding: 5,
                    display: 'ALWAYS'
                }
            },
            {
                id: 4,
                latitude: 23.4109,
                longitude: 117.0344,
                iconPath: 'https://hellouniapp.dcloud.net.cn/static/location.png',
                width: 20,
                height: 20,
                callout: {
                    content: '标记点4',
                    color: '#00aaff',
                    fontSize: 12,
                    borderRadius: 5,
                    bgColor: '#ffffff',
                    padding: 5,
                    display: 'ALWAYS'
                }
            }
        ];
    };
    // 点击地图时触发
    const clickMap = (e) => {
        console.log("点击地图时:", e);
        const {
            latitude,
            longitude
        } = e.detail; // 获取点击位置的经纬度

        // // 判断是否点击了标记点
        // const clickedMarker = this.markers.find(marker => {
        //     return marker.callout.content === address;
        // });
        // if (clickedMarker) {
        //     // 如果点击了标记点，显示地点详情
        //     this.selectedPlace = clickedMarker;
        //     this.showPlaceDetail = true;
        // } else {
        //     // 否则隐藏地点详情
        //     this.showPlaceDetail = false;
        // }

        // 如果已经存在标记点，则移除
        if (currentMarkerId.value !== null) {
            markers.value = markers.value.filter(marker => marker.id !== currentMarkerId.value);
        }

        // 创建新的标记点对象
        const newMarker = {
            id: Date.now(), // 使用时间戳作为唯一标识
            latitude: latitude,
            longitude: longitude,
            iconPath: 'https://hellouniapp.dcloud.net.cn/static/location.png',
            width: 20,
            height: 20,
            callout: {
                content: '新标记点',
                color: '#00aaff',
                fontSize: 12,
                borderRadius: 5,
                bgColor: '#ffffff',
                padding: 5,
                display: 'ALWAYS'
            }
        };

        // 添加新的标记点到标记点数组
        markers.value.push(newMarker);

        // 更新当前标记点的 ID
        currentMarkerId.value = newMarker.id;
    };



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
    }
    const place = ref({
        title: '景点',
        thumb: '/static/logo.png',
        extra: '打卡',
        desp: '这是景点的描述。这是景点的描述。这是景点的描述。这是景点的描述。',
    });





    // 扫描二维码
    const openPoints = ref(0);
    const check_in = ref(0);

    onMounted(async () => {
        await fetchUserData();
    });

    // 扫描二维码处理函数
    const scanQRCode = async () => {
        try {
            const res = await uni.scanCode();
            console.log('扫描二维码结果:', res);
            const data = JSON.parse(res.result); // 解析二维码中的 JSON 内容

            if (data.latitude && data.longitude) {
                const scannedLatitude = data.latitude;
                const scannedLongitude = data.longitude;

                // 获取云数据库中的地址信息
                const db = uniCloud.database();
                const collection = db.collection('address'); // 替换为你的集合名称
                const dbRes = await collection.get();
                const locations = dbRes.result.data;

                // 遍历数据库中的地址信息，查找是否有匹配的经纬度
                let matchFound = false;
                for (let location of locations) {
                    if (location.latitude === scannedLatitude && location.longitude === scannedLongitude) {
                        matchFound = true;
                        break;
                    }
                }

                if (matchFound) {
                    console.log('打卡成功');
                    await addPoints(); // 调用 addPoints 方法增加积分
                } else {
                    console.log('地址匹配失败');
                    uni.showToast({
                        title: '打卡失败',
                        icon: 'none'
                    });
                }
            } else {
                throw new Error('Invalid location data');
            }
        } catch (e) {
            console.error('解析地址失败', e);
            uni.showToast({
                title: '解析地址失败',
                icon: 'none'
            });
        }
    };

    // 增加积分
    const addPoints = async () => {
        const userId = '1'; // 用户 ID
        const pointsToAdd = 10; // 每次增加的积分数
        const checkinToAdd = 1;
        try {
            const res = await uniCloud.callFunction({
                name: 'updatePoints',
                data: {
                    userId: userId,
                    pointsToAdd: pointsToAdd,
                    checkinToAdd: checkinToAdd,
                }
            });

            if (res.result.success && res.result.updated === 1) {
                // 更新成功，更新前端显示的积分和打卡点
                openPoints.value += pointsToAdd;
                check_in.value += checkinToAdd;
                //getServerData(); // 假设此函数用于更新图表数据
                uni.showToast({
                    title: `积分+${pointsToAdd}`,
                    icon: 'success'
                });
            } else {
                throw new Error(res.result.error || '更新积分失败');
            }
        } catch (e) {
            console.error('调用云函数更新积分失败', e);
            uni.showToast({
                title: '更新积分失败',
                icon: 'none'
            });
        }
    };

    // 获取用户数据
    const fetchUserData = async () => {
        // 从数据库中获取用户数据
        try {
            const db = uniCloud.database();
            const collection = db.collection('user_information');
            const res = await collection.where({
                userId: '1'
            }).get();

            if (res.result.data && res.result.data.length > 0) {
                const userData = res.result.data[0];
                openPoints.value = userData.openPoints;
                check_in.value = userData.check_in;
                //getServerData(); // 假设此函数用于更新图表数据
            } else {
                console.error('用户数据获取失败');
            }
        } catch (error) {
            console.error('获取用户数据时出错：', error);
        }
    };

    const btns = ref([{
            title: '重新获取位置',
            icon: '/static/home/relocation.png',
            path: getLocation // 同样不要调用函数，只需指定函数名
        },
        {
            title: '扫描二维码',
            icon: '/static/home/scan.png',
            path: scanQRCode // 这里不应该调用函数，只需要指定函数名即可
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