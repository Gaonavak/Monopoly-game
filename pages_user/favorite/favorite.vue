<template>
    <view class="favorite">
        <view class="search">
            <TnSearchBox v-model="searchValue" @search="searchBtnClickEvent" />
        </view>
        <view class="card">
            <view v-for="(place, index) in places" :key="place.id">
                <my-favorite-card :place="place" @update="handleFavoriteUpdate(index, $event)"
                    @checkin="handleCheckIn(index)" />
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TnSearchBox from '@/uni_modules/tuniaoui-vue3/components/search-box/src/search-box.vue'
import MyFavoriteCard from '@/components/my-favorite-card/my-favorite-card.vue'
import { places, fetchFavoriteAddresses, deleteFavoriteAddress } from '@/data/page-favorite.js'

const searchValue = ref('');

onMounted(async () => {
    await fetchFavoriteAddresses("1"); // 替换为你需要的用户ID
});

const searchBtnClickEvent = () => {
    uni.showToast({
        title: '你搜索了' + searchValue.value,
        icon: 'none'
    })
}

const handleFavoriteUpdate = async (index, favoriteStatus) => {
    if (places.value[index]) {
        if (!favoriteStatus) {
            await deleteFavoriteAddress(places.value[index].id);
        }
        places.value[index].isFavorite = favoriteStatus;
    }
}

const handleCheckIn = (index) => {
    if (places.value[index]) {
        uni.showToast({
            title: places.value[index].title
        })
    }
}
</script>

<style lang="scss" scoped>
.favorite {
    width: 100%;
    min-height: 100vh;
    background-color: $bg-base;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search {
    padding-top: 20rpx;
    width: 100%;
    max-width: 690rpx;
    background-color: $bg-base;
}

.card {
    width: 100%;
    max-width: 690rpx;
    
    &:last-child {
        padding-bottom: 20rpx;
    }
}
</style>
