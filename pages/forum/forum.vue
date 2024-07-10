<template>
    <view class="forum">
        <TnTabs class="tabs" v-model="currentTabIndex" :scroll="false">
            <TnTabsItem v-for="(item, index) in tabsData"
                :key="index"
                :title="item.text" />
        </Tntabs>
        <scroll-view class="scroll-view"
            scroll-y="true">
            <view class="card"
                v-for="i in 3"
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
        // tags: ['标签1', '标签2'],
        content: '小时候养老院里有一家的爷爷和奶奶。那个奶奶是个特别泼辣和急脾气的人，那个爷爷性子很慢，整天乐呵呵的。他俩出去遛弯，就只能听到那个奶奶不停的说话，那爷爷听着。前段时间，那个爷爷突发心脏病去世了。那个奶奶说了句，死老头子，磨磨蹭蹭一辈子，就这件事干的这么利索。说完沉默了一下就哭了。',
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
        display: flex;
        flex-direction: column;

        .scroll-view {
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
    }
</style>