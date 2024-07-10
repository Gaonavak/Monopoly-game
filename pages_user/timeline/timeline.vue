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
                    image: '/static/logo.png'
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
            ],
        },
    ]
</script>

<template>
    <view class="content">
        <TnTimeLine>
            <TnTimeLineItem v-for="(item, index) in timeLineData" :key="index" :title="item.month"
                :title-icon="item.icon !== undefined ? item.icon : ''">
                <TnTimeLineData v-for="(dataItem, dataIndex) in item.data" :key="dataIndex">
                    <view v-if="dataItem?.date"
                        class="time-line__title tn-flex justify-between items-center tn-gray-dark_text">
                        <view class="date">{{ dataItem?.date || '' }}</view>
                        <view class="status">{{ dataItem?.status || '' }}</view>
                    </view>
                    <view class="time-line__data">
                        {{ dataItem.content }}
                    </view>
                    <image class="image" :src="dataItem?.image" mode="aspectFill"></image>
                </TnTimeLineData>
            </TnTimeLineItem>
        </TnTimeLine>
    </view>
</template>

<style lang="scss" scoped>
    .content {
        position: relative;
        width: 100%;
        padding: 30rpx;

        .time-line {
            &__title {
                font-size: 32rpx;
                margin-bottom: 20rpx;
            }
        }
    }
    
    .image{
        margin-top: 30rpx;
        border-radius: 20rpx;
    }
</style>