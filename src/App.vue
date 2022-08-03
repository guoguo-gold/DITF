<template>
	<navbian :msg="id">
		<template v-slot:v1></template>
		<template v-slot:v2></template>
	</navbian>
	<router-view v-slot="{ Component }">
		<Transition name="slide" appear>
			<div>
				<keep-alive exclude="swiper">
					<component :is="Component" />
				</keep-alive>
			</div>
		</Transition>
	</router-view>
</template>

<script setup>
	import router from './router/index'
	import navbian from './components/navbian.vue';
	router.push('/index')
	const id = ["指南", "历史", "文档", "考据", "资源"] //nav的标题内容
</script>

<style scoped>
	.slide-enter-active,
	.slide-leave-active,
	.slide-enter-active,
	.slide-leave-active {
		transition: all 2s ease;
		position: fixed;
		height: 100%;
		width: 3000px;
	}

	.slide-enter-from,
	.slide-leave-to {
		opacity: 0;
		transform: translateX(100%);
	}

	.slide-enter-from,
	.slide-leave-to {
		opacity: 0;
		transform: translateX(-100%);
	}

	.slide-leave-to,
	.slide-leave-to {
		opacity: 0.3;
	}
</style>
