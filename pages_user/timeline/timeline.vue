<script setup lang="ts">
    import TnTimeLine from '@/node_modules/tnuiv3p-tn-time-line/time-line.vue'
    import TnTimeLineItem from '@/node_modules/tnuiv3p-tn-time-line/time-line-item.vue'
    import TnTimeLineData from '@/node_modules/tnuiv3p-tn-time-line/time-line-data.vue'

    interface TimeLineDataItem {
        date ?: string
        status ?: string
        content : string
        image ?: string
    }

    interface TimeLineData {
        month : string
        icon ?: string
        data : TimeLineDataItem[]
    }

    // 时间轴数据
    const timeLineData : TimeLineData[] = [
        {
            month: '2023-07',
            icon: 'moments',
            data: [
                {
                    date: '1',
                    status: '打卡成功',
                    content: '南澳岛面积达117.73平方千米，海岸线长94.3千米。',
                    image: '/static/exhibit.jpg'
                },
                {
                    date: '2',
                    status: '打卡成功',
                    content: '微信开发者工具真的难用，卡顿，恶心',
                    image: '/static/exhibit.jpg'
                },
            ],
        },
        {
            month: '2023-08',
            icon: 'creative',
            data: [
                {
                    date: '2',
                    status: '打卡成功',
                    content: '南澳岛面积达117.73平方千米，海岸线长94.3千米。',
                    image: ''
                },
                {
                    date: '3',
                    status: '打卡成功',
                    content: '东南西北风，你是罗贯中。',
                    image: ''
                },
            ],
        },
    ]
</script>

<template>
    <view class="timeline">
        <TnTimeLine>
            <TnTimeLineItem class="time-line__month" v-for="(item, index) in timeLineData" :key="index"
                :title="item.month" :title-icon="item.icon !== undefined ? item.icon : ''">
                <TnTimeLineData class="time-line__day" v-for="(dataItem, dataIndex) in item.data" :key="dataIndex">
                    <view v-if="dataItem?.date"
                        class="time-line__title tn-flex justify-between items-center tn-gray-dark_text">
                        <view class="date">{{ dataItem?.date || '' }}</view>
                        <view class="status">{{ dataItem?.status || '' }}</view>
                    </view>
                    <view class="text">{{ dataItem.content }}</view>
                    <view v-if="dataItem.image" class="image-box">
                        <image class="image" :src="dataItem.image" mode="aspectFit" />
                    </view>
                </TnTimeLineData>
            </TnTimeLineItem>
        </TnTimeLine>
    </view>
</template>

<style lang="scss" scoped>
    .timeline {
        position: relative;
        width: 100%;
        padding: 30rpx;
    }

    // .time-line__month {
    //     min-height: auto;
    // }

    .time-line__day {
        .time-line__title {
            font-size: 32rpx;
            margin-bottom: 20rpx;
        }
    }

    .text {
        width: 100%;
    }

    .image-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15rpx auto;
        overflow: hidden;


        .image {
            width: 100%;
            height: 400rpx;
            border-radius: $border-radius;
            object-fit: cover;
        }
    }
</style>