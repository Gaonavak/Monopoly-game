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
        latitude: 23.434086,
        longitude: 116.981219,
        description: "全国唯一的海岛国家森林公园，森林覆盖率高达90%以上。公园内部有丰富的人文景观，包括抗日英烈墓纪念碑、南澳抗日纪念馆以及知青旧址等，是追寻海岛英雄足迹的重要地点。",
        extra: "广东省汕头市南澳县南澳岛515000室",
       // title: "海岛国家森林公园",
        iconPath: "/static/map/grey_pin.png",
        width: 40,
        height: 40
    },
    {
        id: 2,
        latitude: 23.425053,
        longitude: 117.023941,
        description: "位于后宅镇中路，馆内藏有大量与海防历史相关的文物和艺术品，是了解南澳海防历史风貌的重要场所。",
        extra: "广东省汕头市南澳县瑞祥路与中兴路交叉路口西南侧(汕头南澳岛旅游区)",
        //title: "南澳县海防史博物馆",
        iconPath: "/static/map/grey_pin.png",
        width: 40,
        height: 40
    },
    {
        id: 3,
        latitude: 23.452142,
        longitude: 117.10198,
        description: "展示了驻南澳总兵的廉政形象和文化，弘扬了优秀总兵廉政文化。",
        extra: "广东省汕头市南澳县后公路与南山路交叉口东北方向25米",
      //  title: "总兵府",
        iconPath: "/static/map/grey_pin.png",
        width: 40,
        height: 40
    },
    {
        id: 4,
        latitude: 23.478733,
        longitude: 117.122796,
        description: "位于南澳岛的东北面，离海岸不远，总面积不足1000平方米。据说，明朝海盗吴平被戚继光剿灭后，临逃时，将平时所劫抢来的金银财宝藏了起来，并要妹妹跟他一起逃走。但吴平的妹妹不愿意离开南澳。吴平担心妹妹一旦被俘，藏金银的地方会被出卖，于是就将妹妹杀死，然后逃跑。吴平所埋金银迄今还没有人找到。金银藏在哪里？当地流传有一句谚语：“潮涨淹唔着，潮退淹三尺”。这句话的意思是：涨潮的时候水浸不到，潮退了倒被水淹三尺。金银财宝埋藏在哪里，仍然是个千古之谜。",
        extra: "广东省汕头市南澳县三三六省道中段",
       // title: "金银岛",
        iconPath: "/static/map/grey_pin.png",
        width: 40,
        height: 40
    },
    {
        id: 5,
        latitude: 23.441581,
        longitude: 117.137131,
        description: "享有“自然之门”称号，是迄今我国建成的第11座北回归线标志塔。该塔设计采用汉字“门”字进行演变造型，球体半径3.21米（对应春分3月21日），悬臂长6.22米（对应夏至6月22日），从底座到球体高12.22米（对应冬至12月22日）；两边门柱所倾斜的角度正好对应北纬23.50。每年夏至正午，当太阳直射北回归线时，日影将穿过上方圆球中心圆管，投射地台中央。",
        extra: "广东省汕头市南澳县岛东端青澳湾中国电信青澳营业厅旁",
     //   title: "北回归线广场",
        iconPath: "/static/map/grey_pin.png",
        width: 40,
        height: 40
    },
    {
        id: 6,
        latitude: 23.396026,
        longitude: 117.106935,
        description: "南宋景炎元年（1276）冬，由于元兵追杀，南宋皇室少帝赵是与弟赵为以及杨太后在陆秀夫、张世杰等护送下，来到南澳，驻踏这里，留下了太子楼、宋井等遗迹。为解决饮水问题，宋军在海边挖了三口井,今遗存的井是其中的一口，称宋井，另二口已被海水泥沙吞没。",
        extra: "广东省汕头市南澳县汕头南澳岛旅游区内",
       // title: "宋井",
        iconPath: "/static/map/grey_pin.png",
        width: 40,
        height: 40
    },
]);
export const cardData = ref({});
export const showCard = ref(false);

export const closePlaceAndTask = () => {
    showCard.value = false;
};

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
export const favorite = async () => {
    try {
        const db = uniCloud.database();
        const collection = db.collection('user_favorite_address');
        const data = {
            userId: "1", // 用户编号
            title: cardData.value.title, // 用户收藏的地址信息
            extra: cardData.value.extra, // 额外信息简介
        };
        let res = await collection.add(data);
        uni.showModal({
            content: '成功收藏',
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
    const userMarker = {
        id: 0,
        latitude: userLatitude.value,
        longitude: userLongitude.value,
        iconPath: '/static/map/me.png',
        width: 20,
        height: 20,
    };
    markers.value = markers.value.filter(marker => marker.id !== 0); // 移除旧的用户位置标记
    markers.value.push(userMarker); // 添加新的用户位置标记
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
        iconPath: '/static/map/map-pin.png',
        width: 20,
        height: 20,
    };
    markers.value.push(newMarker);
    currentMarkerId.value = newMarker.id;
};

// 点击标记点触发
export const onMarkerTap = (event) => {
    const {
        markerId
    } = event.detail;
    if (markerId === 0) return;
    const marker = markers.value.find(m => m.id === markerId);
    if (marker) {
        showCard.value = true;
        cardData.value = {
            title: marker.title,
            thumb: 'https://0.z.wiki/autoupload/20240714/mIJR/1683X2048/logo-hello.png?type=ha',
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
    showCard,
    isGetLocation,
    getAuthorizeInfo,
    getLocation,
    moveToUserLocation,
    getLocationDetail,
    regionchange,
    favorite,
    updateMarkers,
    clickMap,
    onMarkerTap,
    closePlaceAndTask
};