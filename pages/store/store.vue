<template>
    <view class="store">
        <!-- 搜索框 -->
        <uni-search-bar @confirm="search" :focus="true" bgColor="#fff" />

        <!-- 滚动区域布局 -->
        <view class="scrollLayout">
            <!-- 左侧滚动区域 -->
            <view class="leftScroll">
                <scroll-view scroll-y="true" class="scrollView">
                    <view class="row" v-for="(item, index) in 10" :key="item"
                        :class="{ selected: selectedIndex === index }" @click="selectItem(index)">
                        <view class="content">分类{{ item }}</view>
                    </view>
                </scroll-view>
            </view>

            <!-- 右侧滚动区域 -->
            <view class="rightScroll">
                <scroll-view scroll-y="true" :scroll-top="rightScrollIndex" scroll-with-animation class="scrollView">
                    <view class="productView" v-for="i in 10" :key="i">
                        <view class="productCategory">产品分类{{ i }}</view>
                        <view class="product-item" v-for="item in 5" :key="item">
                            <product
                                :src="'http://nanaodao.org/data/upload/201602/f_8c0babc7d916d7caee1c4d6d27317336.jpg'">
                            </product>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
    </view>
</template>

<script setup>
    import product from '@/components/product/product.vue';
    import {
        onMounted,
        ref,
        nextTick
    } from 'vue';

    function search(input) {
        uni.showToast({
            title: '搜索: ' + input.value,
            icon: 'none'
        });
    }

    const selectedIndex = ref(0); // 跟踪当前选中的项目索引
    const leftScrollIndex = ref(0);
    const leftHeights = ref([]); // 用于存储每个左侧分类顶部的高度
    const rightScrollIndex = ref(0);
    const rightHeights = ref([]); // 用于存储每个右侧分类顶部的高度

    function selectItem(index) {
        selectedIndex.value = index; // 更新选中的项目索引
        
        rightScrollIndex.value = rightHeights.value[index]; // 更新右侧滚动位置
    }

    function getHeightArr() {
        let selectorQuery = uni.createSelectorQuery();
        selectorQuery.selectAll('.productView').boundingClientRect(rects => {
            let heights = [];
            let accumulatedHeight = 5;

            rects.forEach((rect, index) => {
                heights[index] = accumulatedHeight;
                accumulatedHeight += rect.height + 11; // 累加高度，并考虑到外边距
            });

            rightHeights.value = heights;
        }).exec();
    }

    onMounted(() => {
        nextTick(() => {
            getHeightArr();
        });
    });
</script>

<style lang="scss" scoped>
    .store {
        width: 100%;
        background: $page-bg-color;
        display: flex;
        flex-direction: column;

        .scrollLayout {
            display: flex;
            width: 100%;
            /* 减去搜索框的高度 */
            height: calc(100vh - 80rpx);
            margin: 20rpx 0;
        }

        .scrollView {
            height: 100%;
        }

        .leftScroll {
            width: 150rpx;
            height: 100%;
            background: #f5f5f5;
            border-right: 1px solid $border-color-light;
        }

        .row {
            line-height: 100rpx;
            text-align: center;
            border-bottom: 1px solid #ddd;
            cursor: pointer;
            position: relative;

            &.selected {
                background: #ffdcdc;
                display: flex;
                justify-content: center;
                align-items: center;

                &::before {
                    content: '';
                    width: 6rpx;
                    height: 50%;
                    background: red;
                    position: absolute;
                    left: 0;
                }
            }
        }

        .rightScroll {
            flex: 1;
            background: $page-bg-color;

            .productView {
                margin: 20rpx;
                border-radius: 20rpx;
                overflow: hidden;

                &:first-child {
                    margin-top: 10rpx;
                }

                .productCategory {
                    padding: 15rpx;
                    background: #9FDBFC;
                    position: -webkit-sticky;
                    position: sticky;
                    top: 0;
                    z-index: 10;
                }

                .product-item {
                    border-bottom: 1rpx solid $border-color-light;

                    &:last-child {
                        border: none;
                    }
                }
            }
        }
    }
</style>