import {
    ref
} from 'vue';

export const longitude = ref(117.062956);
export const latitude = ref(23.434194);
export const userLatitude = ref(0);
export const userLongitude = ref(0);
export const addressInfoRecomd = ref('');
export const currentMarkerId = ref(null);
export const markers = ref([{
        id: 1,
        latitude: 23.4299,
        longitude: 116.9472,
        thumb: '/static/localize.png',
        description: 'aaa',
        extra: '不知道',
        title: '长山尾灯塔',
    },
    {
        id: 2,
        latitude: 23.4160,
        longitude: 116.9732,
        thumb: '/static/localize.png',
        description: '不知道',
        extra: '不知道',
        title: '田宅地质公园'
    }
]);
export const showPopup = ref(true);
export const showCard = ref(false);
export const cardData = ref({});
export const showTask = ref(false);

export const closePlaceAndTask = () => {
    showCard.value = false;
    showTask.value = false;
};

// 任务卡部分
export const handleShowTask = () => {
    showTask.value = true;
}

// 检查定位权限
export const isGetLocation = (a = "scope.userLocation") => {
    uni.getSetting({
        success(res) {
            console.log(res);
            if (!res.authSetting[a]) {
                getAuthorizeInfo(a);
            } else {
                getLocation();
            }
        }
    });
};

// 请求获取地理位置信息的授权
export const getAuthorizeInfo = (a = "scope.userLocation") => {
    uni.authorize({
        scope: a,
        success() {
            getLocation();
        }
    });
};

// 获取定位信息
export const getLocation = () => {
    console.log('现在在获取地址信息');
    uni.getLocation({
        type: 'gcj02',
        success: (res) => {
            console.log(res);
            latitude.value = res.latitude;
            longitude.value = res.longitude;
            userLatitude.value = res.latitude;
            userLongitude.value = res.longitude;
            updateMarkers();
            getLocationDetail();
            moveToUserLocation();
        }
    });
};

// 移动地图到用户位置
export const moveToUserLocation = () => {
    const mapCtx = uni.createMapContext("mapSelected");
    mapCtx.moveToLocation({
        latitude: userLatitude.value,
        longitude: userLongitude.value,
        success: (res) => {
            console.log(res);
            getLocationDetail();
        },
        fail: (err) => {
            console.error("移动地图失败：", err);
        }
    });
};

// 根据经纬度获取详细的地址信息
export const getLocationDetail = () => {
    uni.request({
        header: {
            "Content-Type": "application/text"
        },
        url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude.value + ',' + longitude.value +
            '&key=XOXBZ-MZWWD-CDX4H-PONXN-UA5PJ-D7FJN',
        success: (re) => {
            console.log(re);
            if (re.statusCode == 200) {
                addressInfoRecomd.value = re.data.result.formatted_addresses.recommend;
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
export const regionchange = (e) => {
    console.log(e);
    if (e.type === 'end' && (e.causedBy === 'scale' || e.causedBy === 'drag')) {
        const mapCtx = uni.createMapContext("mapSelected");
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
export const saveAddress = async () => {
    try {
        const db = uniCloud.database();
        const collection = db.collection('address');
        const data = {
            latitude: latitude.value,
            longitude: longitude.value,
            address: address.value
        };
        let res = await collection.add(data);
        uni.showModal({
            content: '数据上传成功：' + JSON.stringify(res),
            showCancel: false
        });
    } catch (error) {
        console.error("上传数据时出错：", error);
        uni.showModal({
            content: '上传数据失败，请重试。',
            showCancel: false
        });
    }
};

// 更新标记点
export const updateMarkers = () => {
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
    }];
};

// 点击地图时触发
export const clickMap = (e) => {
    console.log("点击地图时:", e);
    const {
        latitude,
        longitude
    } = e.detail;
    if (currentMarkerId.value !== null) {
        markers.value = markers.value.filter(marker => marker.id !== currentMarkerId.value);
    }
    const newMarker = {
        id: Date.now(),
        latitude: latitude,
        longitude: longitude,
        iconPath: 'https://hellouniapp.dcloud.net.cn/static/location.png',
        width: 20,
        height: 20,
    };
    markers.value.push(newMarker);
    currentMarkerId.value = newMarker.id;
};

export const onMarkerTap = (event) => {
    const {
        markerId
    } = event.detail;
    const marker = markers.value.find(m => m.id === markerId);
    if (marker) {
        showCard.value = true;
        cardData.value = {
            title: marker.title,
            thumb: marker.thumb,
            extra: marker.extra,
            desp: marker.description
        };
    }
};




export default {
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
    closePlaceAndTask
};