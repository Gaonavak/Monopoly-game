<template>
<!--    <scroll-view class="scroll-view" scroll-y style="height: 100vh;"> -->
        <!-- 地图功能 -->
        <view class="map_wrap">
            <!-- 地图组件 -->
            <map id="mapSelected"
                 style="width: 100%; height: 400px;"
                 :latitude="latitude"
                 :longitude="longitude"
                 :markers="markers"
                 :polyline="polyline"
                 :scale="14"
                 @regionchange="regionchange"
                 @tap="clickMap"
                 @markertap="markertap">
            </map>
            
            <!-- 地址信息展示 -->
            <view class="mform">
                <view class="item">
                    <view class="t">当前地址：</view>
                    <view class="m">{{address_info_recomd}}</view>
                </view>
            </view>
            
            <!-- 保存和重定位按钮 -->
            <view class="btnbox">
                <button class="btn" @click="saveAddress()" style="width:85%;">保存</button>
                <button class="btn" @click="refreshLocation()" style="width:85%;">刷新位置</button>
            </view>
        </view>
        
        <!-- 二维码积分功能 -->
        <view class="container">
            <!-- 扫描二维码按钮 -->
            <button @click="scanQRCode">扫描二维码</button>
        
            <!-- 显示积分 -->
            <view class="points">
                <text>当前积分: {{ points }}</text>
            </view>
        
            <!-- 显示已解锁和未解锁地点 -->
            <view class="location-list">
                <view class="unlocked">
                    <text>已解锁地点:</text>
                    <view v-for="location in unlockedLocations" :key="location.id">{{ location.address }}</view>
                </view>
                <view class="locked">
                    <text>未解锁地点:</text>
                    <view v-for="location in lockedLocations" :key="location.id">{{ location.address }}</view>
                </view>
            </view>
        </view>
        
<!--    </scroll-view> -->
</template>

<script>
export default {
    data() {
        return {
        // 地图的变量
            latitude: 0,
            longitude: 0,
            user_latitude: 0,
            user_longitude: 0,
            currentMarkerId: null, // 记录当前标记点的 ID
            markers: [],
            polyline: [{ // 地图上的路线
                points: [
                    {latitude: 23.4299, longitude: 116.9472},
                    {latitude: 23.4160, longitude: 116.9732},
                    {latitude: 23.4178, longitude: 116.9947},
                    {latitude: 23.4109, longitude: 117.0344}
                ],
                color: '#FF0000DD',
                width: 2,
                dottedLine: true
            }],
            address_info: "", // 推荐地址
            address_info_recomd: "", // 推荐地址详细信息
            address: "", // 当前地址
            
        //二维码变量
            points: 0, // 用户积分
            unlockedLocations: [], // 已解锁地点
            lockedLocations: [] // 未解锁地点
        }
    },
    onLoad() {
        // 页面加载时检查是否获得定位权限
        this.isGetLocation();
    },
    methods: {
    // 地图的函数
        // 检查当前是否已经授权访问地理位置信息
        isGetLocation(a = "scope.userLocation") {
            var _this = this;
            uni.getSetting({
                success(res) {
                    console.log(res)
                    if (!res.authSetting[a]) {
                        // 如果没有授权，则请求授权
                        _this.getAuthorizeInfo()
                    } else {
                        // 如果已经授权，获取地理位置信息
                        _this.getLocation();
                    }
                }
            });
        },
        // 请求获取地理位置信息的授权
        getAuthorizeInfo(a = "scope.userLocation") {
            var _this = this;
            uni.authorize({
                scope: a,
                success() {
                    // 如果允许授权，获取地理位置信息
                    _this.getLocation();
                }
            })
        },
        // 点击地图时触发
        clickMap(e) {
            console.log("点击地图时:", e);
            const { latitude, longitude } = e.detail; // 获取点击位置的经纬度
            
             // 如果已经存在标记点，则移除
             if (this.currentMarkerId !== null) {
                 this.markers = this.markers.filter(marker => marker.id !== this.currentMarkerId);
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
            
            // 添加新的标记点到 markers 数组中
            this.markers.push(newMarker);
            // 更新当前标记点的 ID
            this.currentMarkerId = newMarker.id;
            
             // 更新地理位置详情信息            
            this.latitude = latitude;
            this.longitude = longitude;
            this.getLocationDetail();
        },
        // 获取当前所在位置的经纬度
        getLocation() {
            uni.getLocation({
                type: 'gcj02',
                success: (res) => {
                    console.log(res);
                    this.latitude = res.latitude;
                    this.longitude = res.longitude;
                    this.user_latitude = res.latitude;
                    this.user_longitude = res.longitude;
                    // 更新标记点
                    this.updateMarkers();
                    // 获取地理位置详情信息
                    this.getLocationDetail();
                }
            });
        },
        // 根据经纬度获取详细的地址
        getLocationDetail() {
            uni.request({
                header: {
                    "Content-Type": "application/text"
                },
                url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + this.latitude + ',' + this.longitude +
                    '&key=XOXBZ-MZWWD-CDX4H-PONXN-UA5PJ-D7FJN',
                success: (re) => {
                    // 成功获取到地理位置详细信息
                    console.log(re)
                    if (re.statusCode == 200) {
                        this.address_info_recomd = re.data.result.formatted_addresses.recommend;
                        this.address_info = re.data.result.address_reference.town.title + re.data.result.address_reference.street.title + re.data.result.address_reference.landmark_l2.title;
                        this.address = re.data.result.address_component.nation + 
                                       re.data.result.address_component.province + 
                                       re.data.result.address_component.city + 
                                       re.data.result.address_component.district + 
                                       re.data.result.address_component.street + 
                                       re.data.result.address_component.street_number;
                    } else {
                        uni.showToast({
                            title: '获取地理位置失败，请重试',
                            icon: "none"
                        })
                    }
                }
            });
        },
        // 在地图渲染更新完成时触发
        regionchange(e) {
            console.log(e);
            if (e.type === 'end' && (e.causedBy === 'scale' || e.causedBy === 'drag')) {
                this.mapCtx = uni.createMapContext("mapSelected"); // 创建 map 的上下文对象
                this.mapCtx.getCenterLocation({
                    success: (res) => {
                        console.log(res);
                        this.latitude = res.latitude;
                        this.longitude = res.longitude;
                        this.getLocationDetail();
                    }
                });
            }
        },
        // 保存地址方法
        async saveAddress() {
            try {
                const db = uniCloud.database();
                const collection = db.collection('address');

                // 定义数据
                const data = {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    address: this.address
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
        },
        // 刷新位置方法
        refreshLocation() {
            this.getLocation();
        },
        // 更新标记点
        updateMarkers() {
            this.markers = [
                {
                    id: 0,
                    latitude: this.user_latitude,
                    longitude: this.user_longitude,
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
        },
      
    // 二维码的函数
       scanQRCode() {
           uni.scanCode({
               success: (res) => {
                   console.log('扫描二维码结果:', res);
                   const data = res.result; // 获取二维码中的内容
                   try {
                       // 使用正则表达式解析经纬度信息
                       const latitudeMatch = data.match(/latitude\s*:\s*([0-9.]+)/);
                       const longitudeMatch = data.match(/longitude\s*:\s*([0-9.]+)/);
                       if (latitudeMatch && longitudeMatch) {
                           const locationData = {
                               latitude: parseFloat(latitudeMatch[1]),
                               longitude: parseFloat(longitudeMatch[1]),
                               address: 'aaa' // 需要替换为实际地址信息
                           };
                           console.log('解析后的地址数据:', locationData);
                           this.addPoints();
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
               },
               fail: (err) => {
                   console.error('扫描二维码失败:', err);
                   uni.showToast({
                       title: '扫描二维码失败',
                       icon: 'none'
                   });
               }
           });
       },
       addPoints() {
           // 假设每次扫描增加10积分
           const additionalPoints = 10;
           this.points += additionalPoints;
           uni.showToast({
               title: `积分+${additionalPoints}`,
               icon: 'success'
           });
       }    
    }
}
</script>

<style>
/* 地图的样式 */
.map_wrap {
    position: relative;
}

.mform {
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
}

.item {
    margin-bottom: 10px;
}

.t {
    font-weight: bold;
}

.m {
    margin-top: 5px;
}

.btnbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
}

.btn {
    margin-top: 10px;
}

.popup {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    z-index: 1000;
}

.popup-content {
    text-align: center;
}

.popup .btn {
    margin-top: 20px;
    width: 100%;
}

/* 二维码的样式 */
.container {
    padding: 20px;
}
.points {
    margin-top: 20px;
}
.location-list {
    margin-top: 20px;
}
.unlocked, .locked {
    margin-bottom: 20px;
}
</style>
