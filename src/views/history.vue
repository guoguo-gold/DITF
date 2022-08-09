<template>
	<div class="swiper tip_box">
		<div class="swiper-wrapper">
			<tip>
				<template v-slot:h>
					这是一个标题
				</template>
				<template v-slot:p>
					这是一段话
				</template>
			</tip>
			<tip>
				<template v-slot:h>
					这是一个标题
				</template>
				<template v-slot:p>
					这是一段话
				</template>
			</tip>
		</div>
	</div>
</template>

<script setup>
	import tip from "../components/tip.vue";
	import {onMounted} from 'vue';
import { VERTICAL } from "element-plus/es/components/virtual-list/src/defaults";
import { tryOnBeforeMount } from "@vueuse/core";
	onMounted(() =>{
		var a = document.querySelectorAll(".tips");
		var mySwiper = new Swiper('.swiper', {
			direction: VERTICAL,//滑动的方向
			speed: 1000,
			rewind: true,
			mousewheel: true,
			spaceBetton: 30,
		})
	})
</script>

<style scoped>

	.tip_box{
		position: absolute;
		top: 200px;
		left: calc(50% - 600px);
		width: 1200px;
		height: 600px;
	}
</style>