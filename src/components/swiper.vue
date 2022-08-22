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
			<div class="swiper-slide slide1" data-hash="index">
        <div class="slide-box" style="left: 100px">
				  <div class="title" data-swiper-parallax="-100" style="font-size:35px">欢迎使用本产品！</div>
        </div>
			</div>
			<div class="swiper-slide slide2" data-hash="index">
        <div class="slide-box" style="left: 100px">
          <div class="title" data-swiper-parallax="-100" data-swiper-parallax-opacity="0.5">这是一个标题</div>
          <div class="p p1" data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5">这是一段文字</div>
          <div class="p p2" data-swiper-parallax="-300" data-swiper-parallax-opacity="0.5">这是一段文字</div>
        </div>
			</div>
			<div class="swiper-slide slide3" data-hash="index">
        <div class="slide-box" style="left: 100px">
			  	<div class="title" data-swiper-parallax="-100" data-swiper-parallax-opacity="0.5">这是一个标题</div>
        </div>
      </div>
			<div class="swiper-slide slide4" data-hash="history">
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>
	</div>
</template>
<script setup>
	import { onMounted,ref,reactive,watch } from 'vue';
	import router from '../router';
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
			pagination: {
			  el: '.swiper-pagination',
			},

			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},

			scrollbar: {
			  el: '.swiper-scrollbar',
			},
		})
		var mySwiper2 = new Swiper ('#swiper2', {
			slidesPerView : 1,
			slidesPerGroup : 1,
			mousewheel: true,
			parallax:true,
			speed: 1000,
			allowTouchMove:false,
			hashNavigation: true,
			lazyLoading:true,
			lazyLoadingInPrevNext:true,
			lazyLoadingInPrevNextAmount:4,
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			  hideOnClick : true,
			},
			
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			
			scrollbar: {
			  el: '.swiper-scrollbar',
			},
		}) 
		const state = reactive({
			render: 0
		})//定义一个变量用来存储requestAnimationFrame
		var slide = document.querySelectorAll(".swiper-slide");
		var blur = 2;
		var brightness = 50
	
	})
</script>
<style scoped>
	@media screen and (max-width:800px){
		#swiper1{
			width: 100%;
			height: 1080rem;
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
			width: 2200px;
			background-repeat: no-repeat;
			background-size: 100%;
			filter:brightness(100%);
			background-image: url("../assets/2.jpeg");
		}
		#swiper2 .swiper-slide{
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			font-size: 100px;
			color: rgba(255,255,255,0.5);
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
    .slide-box{
      position: absolute;
      top: 100px;
      font-weight: bold;
    }
    .title{
      font-size: 25px;
      background: linear-gradient(to right bottom,rgba(255,255,255,1),rgba(255,255,255,0.7) 100%);
      color: transparent;
      -webkit-background-clip: text;
    }
    .p{
      font-size: 20px;
      color: white;
    }
	}
</style>
