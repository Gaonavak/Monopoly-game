<template>
    <view class="timeline">

    </view>
</template>

<script setup>
    import TnTimeLine from '@/node_modules/tnuiv3p-tn-time-line/time-line.vue'
    import TnTimeLineItem from '@/node_modules/tnuiv3p-tn-time-line/time-line-item.vue'
    import TnTimeLineData from '@/node_modules/tnuiv3p-tn-time-line/time-line-data.vue'

    interface TimeLineDataItem {
        date ? : string
        version ? : string
        content: string
    }

    interface TimeLineData {
        month: string
        icon ? : string
        data: TimeLineDataItem[]
    }
</script>

<style lang="scss" scoped>

</style>