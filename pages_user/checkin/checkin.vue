<template>
    <view class="checkin">
        <view class="progress-box">
            <TnCircleProgress :percent="progressPercent" show-percent :radius="160" :ring-width="30"
                :duration="anime_duration">

                <view class="progressPercent-text">
                    <TnCountScroll :value="progressPercent" font-size="100rpx" text-color="#01BEFF"
                        :duration="anime_duration" />
                    <!-- {{progressPercent}} --> <!-- 没有动画 -->
                    <view class="unit">%</view>
                </view>
            </TnCircleProgress>
        </view>

        <view class="bottom-area">
            <TnCollapse v-model="currentCollapse">
                <TnCollapseItem v-for="(item, index) in collapseData" :key="index" :title="item.title">
                    <template #title>
                        <view class="title">
                            <view class="title-name">{{item.title}}</view>
                            <view class="title-count">{{item.count}}</view>
                        </view>
                    </template>
                    <view v-if="item.content" class="content">
                        {{item.content}}
                    </view>
                </TnCollapseItem>
            </TnCollapse>
        </view>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import TnLineProgress from '@/uni_modules/tuniaoui-vue3/components/line-progress/src/line-progress.vue'
    import TnCircleProgress from '@/uni_modules/tuniaoui-vue3/components/circle-progress/src/circle-progress.vue'
    import TnCollapse from '@/uni_modules/tuniaoui-vue3/components/collapse/src/collapse.vue'
    import TnCollapseItem from '@/uni_modules/tuniaoui-vue3/components/collapse/src/collapse-item.vue'
    import TnCountScroll from '@/uni_modules/tuniaoui-vue3/components/count-scroll/src/count-scroll.vue'

    const anime_duration = ref(1500)
    const progressPercent = ref(30)
    const point = ref(100)
    const count_finished = ref(13)
    const count_todo = ref(5)

    const currentCollapse = ref(-1)
    const collapseData = [{
        title: '总积分',
        count: point.value,
        content: ''
    }, {
        title: '已打卡',
        count: count_finished.value,
        content: '广东、南昌、西安、武汉、浙江'
    }, {
        title: '未打卡',
        count: count_todo.value,
        content: '秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！'
    }]
</script>

<style lang="scss" scoped>
    .checkin {
        width: 100%;
        height: 100vh;
        min-height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: $bg-base;
    }

    .progress-box {
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 150rpx;
    }

    .progressPercent-text {
        font-size: 100rpx;
        display: flex;
        flex-direction: row;

        .unit {
            font-size: 50rpx;
            display: flex;
            align-items: end;
            padding-bottom: 4rpx;
        }
    }

    .bottom-area {
        width: 100%;
        max-width: 690rpx;
        margin: 100rpx auto;
        background-color: $bg-card;
        border-radius: $border-radius;
    }

    .title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .title-name {}

        .title-count {
            margin-right: 30rpx;
        }
    }
</style>