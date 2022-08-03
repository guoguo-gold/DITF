<template>
	<div id="swiper1" class="swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide slide1"></div>
			<div class="swiper-slide slide2"></div>
			<div class="swiper-slide slide3"></div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>
	</div>
	<div id="swiper2" class="swiper">
		<div class="parallax-bg" data-swiper-parallax="-13%" data-swiper-parallax-duration="3000"></div>
		<div class="swiper-wrapper">
			<div class="swiper-slide slide1">
				<div class="title" data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5">1</div>
			</div>
			<div class="swiper-slide slide2">
				<div class="title" data-swiper-parallax="-100">1</div>
				<div class="title" data-swiper-parallax="-200">2</div>
				<div class="title" data-swiper-parallax="-300">3</div>
			</div>
			<div class="swiper-slide slide3">
				<div class="title" data-swiper-parallax="-200">3</div>
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>
	</div>
</template>
<script setup>
	import { onMounted,ref } from 'vue';
	const windowWidth = ref(0);
	const windowHeight = ref(0);
	window.onresize = () =>{
		windowWidth.value =  window.innerWidth;
		windowHeight.value =  window.innerHeight;
	}
	onMounted(() => {
		var mySwiper = new Swiper ('#swiper1', {
			loop: true, // 循环模式选项
			slidesPerView : 1,
			slidesPerGroup : 1,
			mousewheel: true,
			// 如果需要分页器
			pagination: {
			  el: '.swiper-pagination',
			},

			// 如果需要前进后退按钮
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},

			// 如果需要滚动条
			scrollbar: {
			  el: '.swiper-scrollbar',
			},
		}) 
		var mySwiper = new Swiper ('#swiper2', {
			slidesPerView : 1,
			slidesPerGroup : 1,
			mousewheel: true,
			parallax:true,
			speed: 1000,
			// 如果需要分页器
			pagination: {
			  el: '.swiper-pagination',
			},
			
			// 如果需要前进后退按钮
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			
			// 如果需要滚动条
			scrollbar: {
			  el: '.swiper-scrollbar',
			},
		}) 
	})
</script>
<style scoped>
	@media screen and (max-width:800px){
		#swiper1{
			width: 100%;
			height: 1080rem
		}  
		#swiper1 .swiper-slide{
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
		#swiper1 .slide1{
			background-image: url("../assets/2.jpeg");
		}
		#swiper1 .slide2{
			background-image: url("../assets/3.jpeg");
		}
		#swiper1 .slide3{
			background-image: url("../assets/2.jpeg");
		}
		#swiper2{
			display: none;
		}
	}
	@media screen and (min-width:800px){
		#swiper2{
			position: fixed;
			width: 100%;
			height: calc(100% - 55px);
		}  
		#swiper2 .parallax-bg{
			position: fixed;
			height: 100%;
			width: 3000px;
			background-repeat: no-repeat;
			background-size: auto 100%;
			background-image: url("../assets/2.jpeg");
		}
		#swiper2 .swiper-slide{
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			font-size: 100px;
		}
		#swiper2 .slide1{
		}
		#swiper2 .slide2{
		}
		#swiper2 .slide3{
		}
		#swiper1{
			display: none;
		}
	}
</style>
