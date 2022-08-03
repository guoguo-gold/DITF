<template>
	<div class="nav_component">
		<div class="title">
			<div class="logo">
				<img src="../assets/1.jpeg"/>
				<div class="title_name">DITF</div>
			</div>
		</div>
		<nav>
			<ul>
				<li v-for="item in msg">{{ item }}</li>
			</ul>
		</nav>
	</div>
</template>

<script setup>
	import {
		onMounted
	} from 'vue'
	const props = defineProps({
		msg: {
			type: Object,
		}
	})
	
	onMounted(() => {
		var a = document.querySelectorAll("ul li");
		for (let i = 0; i < a.length; i++) {
			a[i].onmouseover = function() {
				$(this).stop(true).animate({"color":"pink"},200);
			}
			a[i].onmouseout = function() {
				$(this).stop(true).animate({"color":"rgba(0,0,0,1)"},200);
			}
			a[i].onclick = function() {
				for (let i = 0; i < a.length; i++) {
					a[i].style.boxShadow = "none"
				}
				this.style.boxShadow = "0px 1px 0px 0px skyblue"
			}
		}
		
		var t = document.querySelector(".logo");
		t.onmouseover = function() {
			$(this).stop(true).animate({"opacity":"0.7"},200);
		}
		t.onmouseout = function() {
			$(this).stop(true).animate({"opacity":"1"},200);
		}
	})
</script>
<style scoped>
	@media screen and (min-width:800px) {
		.nav_component {
			display: flex;
			width: 100%;
			height: 55px;
			border-bottom: 1px solid rgba(153, 153, 153, 0.2);
			align-items: center;
			z-index: 100;
		}
		.title{
			height: 55px;
			flex-grow: 1;	
			user-select: none;
			cursor: pointer;
		}
		.title div{
			height: 55px;
			margin: 0 20px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		.title_name{
			font-size: 30px;
			font-weight: bold;
			color: transparent;
			background:-webkit-linear-gradient(220deg,pink 25%,skyblue);
			-webkit-background-clip: text;
		}
		.title div img{
			height: 50px;
			border-radius: 5px;
		}
		nav {
			flex-grow: 1;
		}
		nav ul{
			list-style: none;
			display: flex;
			justify-content: center;
			align-items: center;
			
		}
		nav ul li{
			flex-grow: 1;
			height: 55px;
			line-height: 55px;
			text-align: center;
			cursor: pointer;
			font-size: 13px;
			user-select: none;
		}
	}
	@media screen and (max-width:800px) {
		.nav_component {
			display: flex;
			width: 100%;
			height: 55px;
			border-bottom: 1px solid rgba(153, 153, 153, 0.2);
			align-items: center;
		}
		.title{
			display: none;
		}
		nav {
			flex-grow: 1;
		}
		nav ul{
			list-style: none;
			display: flex;
			justify-content: center;
			align-items: center;
			
		}
		nav ul li{
			flex-grow: 1;
			height: 55px;
			line-height: 55px;
			text-align: center;
			cursor: pointer;
			font-size: 13px;
			user-select: none;
		}
	}
</style>
