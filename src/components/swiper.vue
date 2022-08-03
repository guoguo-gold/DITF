<template>
<div class="swiper">
	<div style="background-image:url(../assets/2.jpeg)" data-swiper-parallax="-23%" data-swiper-parallax-duration="3000"></div>
    <div class="swiper-wrapper">
       <div class="swiper-slide">
            <div class="title" data-swiper-parallax="-100">从右边100px开始进入</div>
            <div class="subtitle" data-swiper-parallax="-200">从右边200px开始进入</div>
            <div class="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <p>从右边300px开始进入，时间600ms</p>
            </div>
            <div data-swiper-parallax="0" data-swiper-parallax-opacity="0.5" >透明度变化</div>
            <div data-swiper-parallax-scale="0.15" >缩放变化</div>
        </div>
    </div>
</div>
</template>
<script setup>
	import { onMounted } from 'vue';
	onMounted(() => {
		var mySwiper = new Swiper ('.swiper', {
			            parallax : true,

		}) 
	})
</script>
<style scoped>
	.swiper {
	    width: 100%;
	    height: 500px;
	}  
	.swiper-slide{
		background-size: auto 100%;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
