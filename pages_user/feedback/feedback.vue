<template>
    <view class="feedback">

        <view class="subsection">
            <TnSubsection v-model="subsectionValue" mode="default">
                <TnSubsectionItem title="界面不合理" />
                <TnSubsectionItem title="玩法不合理" />
                <TnSubsectionItem title="内容不合规" />
                <TnSubsectionItem title="其他" />
            </TnSubsection>
        </view>

        <view class="input">
            <TnInput v-model="inputValue" type="textarea" height="500rpx" :maxlength="3000" active-color="#01BEFF"
                placeholder="请输入您的反馈" />
        </view>


        <TnPopup class="popup" v-if="!inputValue" v-model="showPopup" width="60%">
            <view class="tn-p-lg"> 提交内容为空，提交失败 😭</view>
        </TnPopup>
        <TnPopup v-else v-model="showPopup">
            <view class="tn-p-lg">反馈提交成功 😊</view>
        </TnPopup>

        <button class="bottom" @click="submit">提交反馈</button>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import TnSubsection from '@/uni_modules/tuniaoui-vue3/components/subsection/src/subsection.vue'
    import TnSubsectionItem from '@/uni_modules/tuniaoui-vue3/components/subsection/src/subsection-item.vue'
    import TnInput from '@/uni_modules/tuniaoui-vue3/components/input/src/input.vue'
    import TnPopup from '@/uni_modules/tuniaoui-vue3/components/popup/src/popup.vue'

    const subsectionValue = ref(0)
    const showPopup = ref(false)
    const inputValue = ref('')
    const submit = () => {
        showPopup.value = true;
    }
</script>

<style lang="scss" scoped>
    .feedback {
        width: 100%;
        min-height: 100vh;
        background-color: $bg-base;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .subsection {
        width: 100%;
        max-width: 690rpx;
        margin: 40rpx;
    }

    .input {
        width: 100%;
        max-width: 690rpx;
        border-radius: $border-radius;
        margin: 40rpx;
        background-color: $bg-card;
    }

    .bottom {
        width: 100%;
        max-width: 690rpx;
        margin: 40rpx auto;
        border-radius: $border-radius;
        color: white;
        background-color: #01BEFF;
    }
    
    .popup{
        text-align: center;
    }
</style>