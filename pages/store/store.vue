<template>
	<view class="out">
		<!-- 搜索 -->
		<uni-search-bar @confirm="search" :focus="true" bgColor="#fff"  :value="iptValue" @focus="isActive=true" @blur= "isActive=false"/>
		 <!-- <input type = "text" :value="iptValue" @focus="isActive=true" @blur= "isActive=false"/> -->
		 <image src="../../static/user/chicken.gif" class="pic" 
		 :class="isActive?'active':''"></image>
		 
		<!-- 打卡景点、热评、推荐等内容 -->
		<swiper  indicator-dots indicator-color="rgba(255,255,255,0.3)"
		 indicator-active-color="#ffffff" circular autoplay interval="2000" previous-margin="10%" next-margin="10%">
		<swiper-item><image src="../../static/logo.png" mode="aspectFill"></image></swiper-item>
		<swiper-item><image src="../../static/user/forum.png" mode="aspectFill"></image></swiper-item>   
		<swiper-item><image src="../../static/logo.png"mode="aspectFill"></image></swiper-item>
		<swiper-item><image src="../../static/tabBar/forum-ing.png" mode="aspectFill"></image></swiper-item>
	
	</swiper>
	</view>
<!-- 	<navigator url="/pages/demo2/demo2" >跳转到到demo2</navigator>
	<navigator url="/pages/demo2/demo2" ><image src="../../static/logo.png">hh</image></navigator> -->
</template>
<script setup>
	import {ref} from "vue";
	const iptValue = ref("");
	const isActive = ref(false);
</script>

<style lang="scss">
	.out{
		padding:0 20px;
		margin-top: 40px;
		position:relative;
		input{
			border: 1px solid #ccc;
			height: 40px;
			position:relative;
			z-index: 2;
			background: #fff;
		}
		.pic{
			width: 24px;
			height: 24px;
			z-index: 1;
			position: absolute;
			top:20px;
			left:calc(50% - 12px);
			transition: top 0.3s;
			
		}
		.pic.active{
			top:-12px;
		}
	
	swiper{
		 width:90vw;
		 height:180px;
		 border:1px solid green;
		 swiper-item{
			 width: 100%;
			 height:100%;
			 background:pink;
			 
		 }swiper-item:nth-child(2n){
			 background:orange;
			 
		 }
	}
image{
	width: 100%;
	height: 100%;
}

}
</style>
D