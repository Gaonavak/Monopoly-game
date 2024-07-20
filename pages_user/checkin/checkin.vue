<template>
    <view class="checkin">
        <view class="progress-box">
            <TnCircleProgress :percent="progressPercent"
                show-percent
                :radius="160"
                :ring-width="30"
                :duration="anime_duration">
                <!-- 进度显示 -->
                <view class="progressPercent-text">
                    <TnCountScroll class="number"
                        :value="progressPercent"
                        font-size="100rpx"
                        text-color="#01BEFF"
                        :duration="anime_duration" />
                    <view class="unit">%</view>
                </view>
            </TnCircleProgress>
        </view>

        <view class="bottom-area">
            <TnCollapse v-model="currentCollapse">
                <TnCollapseItem v-for="(item, index) in collapseData"
                    :key="index"
                    :title="item.title">
                    <!-- 自定义标题 -->
                    <template #title>
                        <view class="title">
                            <view class="title-left">
                                <TnIcon class="title-icon"
                                    :name="item.icon"
                                    size="40rpx" />
                                <view class="title-name">{{item.title}}</view>
                            </view>
                            <view class="title-count">{{item.count}}</view>
                        </view>
                    </template>
                    <view v-if="item.content"
                        class="content">
                        {{item.content}}
                    </view>
                </TnCollapseItem>
            </TnCollapse>
        </view>
    </view>
</template>

<script setup>
    import {
        ref,
        onMounted,
        watch
    } from 'vue';
    import TnIcon from '@/uni_modules/tuniaoui-vue3/components/icon/src/icon.vue';
    import TnLineProgress from '@/uni_modules/tuniaoui-vue3/components/line-progress/src/line-progress.vue';
    import TnCircleProgress from '@/uni_modules/tuniaoui-vue3/components/circle-progress/src/circle-progress.vue';
    import TnCollapse from '@/uni_modules/tuniaoui-vue3/components/collapse/src/collapse.vue';
    import TnCollapseItem from '@/uni_modules/tuniaoui-vue3/components/collapse/src/collapse-item.vue';
    import TnCountScroll from '@/uni_modules/tuniaoui-vue3/components/count-scroll/src/count-scroll.vue';

    const openPoints = ref(0);
    const check_in = ref(0);
    const collapseData = ref([]); // 将 collapseData 声明为 ref
    const anime_duration = ref(1500);
    const progressPercent = ref(0);
    const count_todo = ref(5);
    const currentCollapse = ref(-1);

    const fetchUserData = async () => {
        // 从数据库中获取用户数据
        try {
            const db = uniCloud.database();
            const collection = db.collection('user_information');
            const res = await collection.where({
                userId: "1"
            }).get();
            console.log("进来了");
            if (res.result.data && res.result.data.length > 0) {
                const userData = res.result.data[0];
                openPoints.value = userData.openPoints;
                check_in.value = userData.check_in;
                updateCollapseData(); // 数据更新后更新 collapseData
            } else {
                console.error('用户数据获取失败');
            }
        } catch (error) {
            console.error('获取用户数据时出错：', error);
        }
    };

    // 更新 collapseData 内容
    const updateCollapseData = () => {
        collapseData.value = [{
            title: '总积分',
            icon: 'star',
            count: openPoints.value,
            content: ''
        }, {
            title: '已打卡',
            icon: 'success-circle',
            count: check_in.value,
            content: '广东、南昌、西安、武汉、浙江'
        }, {
            title: '未打卡',
            icon: 'close-circle',
            count: 6 - check_in.value,
            content: '秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！'
        }];
    };
    // 监听 openPoints 的变化
    watch(openPoints, (newVal) => {
        progressPercent.value = newVal;
        updateCollapseData();
    });
    onMounted(async () => {
        await fetchUserData(); // 调用获取用户数据的函数
    });
</script>


<style lang="scss"
    scoped>
    .checkin {
        width: 100%;
        min-height: 100vh;
        background-color: $bg-base;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .progress-box {
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 150rpx;
    }

    .progressPercent-text {
        display: inline-flex;
        flex-direction: row;

        .unit {
            font-size: 50rpx;
            display: flex;
            align-items: flex-end;
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

        .title-left {
            display: inline-flex;
            flex-direction: row;

            .title-name {
                margin-left: 20rpx;
            }
        }

        .title-count {
            margin-right: 30rpx;
        }
    }
</style>