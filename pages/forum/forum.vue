<template>
    <view class="forum">
        <view class="search">
            <TnSearchBox v-model="searchValue" @search="searchBtnClickEvent" />
        </view>

        <TnTabs class="tabs" v-model="currentTabIndex" :scroll="false">
            <TnTabsItem v-for="(item, index) in tabsData" :key="index" :title="item.text" />
        </Tntabs>
        <view class="scroll-view">
            <scroll-view scroll-y="true">
                <view class="card" v-for="i in 6" :key="i">
                    <TnGraphicCard :avatar="graphicData.avatar" :title="graphicData.title"
                        :description="graphicData.description" :tags="graphicData.tags" :content="graphicData.content"
                        :images="graphicData.images" :view-count="graphicData.viewCount"
                        :comment-count="graphicData.commentCount" :like-count="graphicData.likeCount"
                        :view-user-avatars="graphicData.viewUserAvatars" />
                </view>
            </scroll-view>
        </view>

    </view>
</template>

<script setup>
    import TnGraphicCard from '@/node_modules/tnuiv3p-tn-graphic-card/index.vue';
    import TnTabs from '@/uni_modules/tuniaoui-vue3/components/tabs/src/tabs.vue';
    import TnTabsItem from '@/uni_modules/tuniaoui-vue3/components/tabs/src/tabs-item.vue';
    import TnSearchBox from '@/uni_modules/tuniaoui-vue3/components/search-box/src/search-box.vue';
    import {
        ref
    } from 'vue';
    const graphicData = {
        id: 1,
        avatar: '/static/avatar.jpg',
        title: '张三',
        description: '2024年7月3日',
        // tags: ['标签1', '标签2'],
        content: '我最近去了一趟南澳旅行，那里的美景让我流连忘返。南澳的自然风光真是令人惊叹，海岸线蜿蜒曲折，碧蓝的海水与白沙滩相映成趣。早晨的日出壮丽无比，仿佛金色的光芒洒满大地，让人心旷神怡。南澳，真是一个值得一去再去的地方。',
        images: [
            '/static/1.jpg',
            '/static/2.jpg',
            '/static/3.jpg',
            '/static/4.jpg',
        ],
        viewCount: 100,
        commentCount: 101,
        likeCount: 102,
        viewUserAvatars: [
            '/static/logo.png',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            '/static/avatar1.jpg',
            '/static/03-6.png',
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
    const tabsData = ref([{
            text: '关注',
        },
        {
            text: '推荐',
        },
        {
            text: '热榜',
        },
        {
            text: '搞笑',
        },
        {
            text: '视频',
        }
    ]);
</script>

<style lang="scss" scoped>
    .forum {
        width: 100%;
        min-height: 100vh;
    }

    .search {
        margin: 20rpx;
    }

    .scroll-view {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
</style>