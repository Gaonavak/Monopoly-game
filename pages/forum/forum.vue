<template>
    <view class="forum">
        <view class="search">
            <TnSearchBox v-model="searchValue"
                @search="searchBtnClickEvent" />
        </view>

        <TnTabs class="tabs"
            v-model="currentTabIndex"
            :scroll="false">
            <TnTabsItem v-for="(item, index) in tabsData"
                :key="index"
                :title="item.text" />
        </Tntabs>
        <view class="scroll-view">
            <scroll-view scroll-y="true">
                <!-- 视频页面 -->
                <view v-if="currentTabIndex === 4"
                    class="waterfall">
                    <TnWaterFall :data="videoData">
                        <template #left="{ item }">
                            <view class="water-card">
                                <my-video-card :image="item.image"
                                    :title="item.title" />
                            </view>
                        </template>
                        <template #right="{ item }">
                            <view class="water-card">
                                <my-video-card :image="item.image"
                                    :title="item.title" />
                            </view>
                        </template>
                    </TnWaterFall>
                </view>

                <!-- 非视频页面 -->
                <view v-else
                    class="card"
                    v-for="i in 6"
                    :key="i">
                    <TnGraphicCard :avatar="graphicData.avatar"
                        :title="graphicData.title"
                        :description="graphicData.description"
                        :tags="graphicData.tags"
                        :content="graphicData.content"
                        :images="graphicData.images"
                        :view-count="graphicData.viewCount"
                        :comment-count="graphicData.commentCount"
                        :like-count="graphicData.likeCount"
                        :view-user-avatars="graphicData.viewUserAvatars" />
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script setup>
    import TnGraphicCard from '@/node_modules/tnuiv3p-tn-graphic-card/index.vue';
    import TnTabs from '@/uni_modules/tuniaoui-vue3/components/tabs/src/tabs.vue';
    import TnWaterFall from '@/uni_modules/tuniaoui-vue3/components/water-fall/src/water-fall.vue'
    import TnTabsItem from '@/uni_modules/tuniaoui-vue3/components/tabs/src/tabs-item.vue';
    import TnSearchBox from '@/uni_modules/tuniaoui-vue3/components/search-box/src/search-box.vue';
    import {
        tabsData,
        videoData
    } from '@/data/page-forum.js'
    import {
        ref
    } from 'vue';
    const graphicData = {
        id: 1,
        avatar: 'https://www.picgo.net/image/avatar.koxRsl',
        title: '张三',
        description: '2024年7月3日',
        content: '我最近去了一趟南澳旅行，那里的美景让我流连忘返。南澳的自然风光真是令人惊叹，海岸线蜿蜒曲折，碧蓝的海水与白沙滩相映成趣。早晨的日出壮丽无比，仿佛金色的光芒洒满大地，让人心旷神怡。南澳，真是一个值得一去再去的地方。',
        images: [
            '/static/show/1.jpg',
            'https://0.z.wiki/autoupload/20240714/cWZz/1080X1440/2.jpg?type=ha',
            'https://0.z.wiki/autoupload/20240714/BKk7/1080X1440/3.jpg?type=ha',
            '/static/show/4.jpg',
        ],
        viewCount: 100,
        commentCount: 101,
        likeCount: 102,
        viewUserAvatars: [
            'https://www.picgo.net/image/avatar.koxRsl',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://www.picgo.net/image/avatar1.koxjKG',
            'https://0.z.wiki/autoupload/20240714/70CT/2048X2048/03-6.png?type=ha',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
        ],
    };

    const searchValue = ref('');

    const searchBtnClickEvent = (value) => {
        uni.showToast({
            title: '你搜索了' + searchValue.value,
            icon: 'none'
        })
    }
    const currentTabIndex = ref(0)
</script>

<style lang="scss"
    scoped>
    .forum {
        width: 100%;
        height: 100%;
        min-height: 100vh;
    }

    .search {
        margin: 20rpx;
    }

    .scroll-view {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: skyblue;
    }

    .card {
        width: 100%;
        max-width: 690rpx;
        border-radius: 15rpx;
        overflow: hidden;
        margin: 30rpx auto;
        background-color: #fff;
        box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
    }


    .waterfall {
        padding: 20rpx;

        .left .water-card {
            margin-bottom: 15rpx;
            padding-right: 10rpx;
        }

        .right .water-card {
            margin-bottom: 15rpx;
            padding-left: 10rpx;
        }
    }
</style>