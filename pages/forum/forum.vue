<template>
    <view class="forum">
        <TnTabs v-model="currentTabIndex" :scroll="false">
            <TnTabsItem v-for="(item, index) in tabsData" :key="index" :title="item.text" />
        </Tntabs>
        <scroll-view class="scroll-view" scroll-y="true">
            <TnGraphicCard class="card" v-for="i in 3" :key="i" :avatar="graphicData.avatar" :title="graphicData.title"
                :description="graphicData.description" :tags="graphicData.tags" :content="graphicData.content"
                :images="graphicData.images" :view-count="graphicData.viewCount"
                :comment-count="graphicData.commentCount" :like-count="graphicData.likeCount"
                :view-user-avatars="graphicData.viewUserAvatars" />
        </scroll-view>
    </view>
</template>

<script setup>
    import TnGraphicCard from '@/node_modules/tnuiv3p-tn-graphic-card/index.vue';
    import TnTabs from '@/uni_modules/tuniaoui-vue3/components/tabs/src/tabs.vue';
    import TnTabsItem from '@/uni_modules/tuniaoui-vue3/components/tabs/src/tabs-item.vue';
    import {
        ref
    } from 'vue';
    const graphicData = {
        id: 1,
        avatar: 'https://resource.tuniaokj.com/images/album/xiong1.jpg',
        title: '文章标题',
        description: '2023年6月30日',
        tags: ['标签1', '标签2'],
        content: '看看打开打开年份记得当年开始放假哦额外欺骗人u饿哦漂亮放佛怕打雷舒服呢我脾气破费了发多少呢；否，可能打飞机哦喷泉哦怕可能地方打开螺丝粉年份的肌肤看能否。',
        images: [
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
        ],
        viewCount: 100,
        commentCount: 101,
        likeCount: 102,
        viewUserAvatars: [
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
            'https://resource.tuniaokj.com/images/album/xiong1.jpg',
        ],
    };

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
        height: 100vh;
        background-color: skyblue;

        .scroll-view {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .card {
                width: 100%;
                max-width: 690rpx;
                border-radius: 12rpx;
                margin: 30rpx auto;
                background-color: #fff;
                box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
            }
        }
    }
</style>