<template>
    <view class="shopping">
        <view class="search">
            <TnSearchBox v-model="searchValue" @search="searchBtnClickEvent" />
        </view>

        <TnTabs class="tab" v-model="currentTabIndex" :scroll="false" bg-color="#F0F4F9">
            <TnTabsItem v-for="(item, index) in tabsData" :key="index" :title="item.text" />
        </TnTabs>

        <scroll-view scroll-y class="card-box">
            <view v-for="i in 3">
                <view class="card">
                    <my-product-card v-for="product in products" :key="product.id" :product="product" />
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        products
    } from '@/data/page-shopping.js'
    import TnSearchBox from '@/uni_modules/tuniaoui-vue3/components/search-box/src/search-box.vue'
    import TnTabs from '@/uni_modules/tuniaoui-vue3/components/tabs/src/tabs.vue'
    import TnTabsItem from '@/uni_modules/tuniaoui-vue3/components/tabs/src/tabs-item.vue'

    const searchValue = ref('')
    const searchBtnClickEvent = () => {
        uni.showToast({
            title: '你搜索了' + searchValue.value,
            icon: 'none'
        })
    }

    const currentTabIndex = ref(0)
    const tabsData = [{
        text: '全部'
    }, {
        text: '待付款'
    }, {
        text: '待发货'
    }, {
        text: '待收货'
    }, {
        text: '待评价'
    }]
</script>

<style lang="scss" scoped>
    .shopping {
        width: 100%;
        height: 100%;
        background-color: $bg-base;
    }

    .search,
    .tabs {
        width: 100%;
        background-color: $bg-base;
    }

    .search {
        padding: 20rpx;
    }

    .card-box {
        flex: 1;
        height: 100%;
        background-color: $bg-base;

        .card {
            margin: 20rpx;
        }

        &:last-child {
            padding-bottom: $padding-bottom;
        }
    }
</style>