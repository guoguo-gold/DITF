<template>
	<navbian :msg="id">
		<template v-slot:v1></template>
		<template v-slot:v2></template>
	</navbian>
	<router-view v-slot="{ Component }">
		<Transition name="slide" appear>
			<div>
				<component :is="Component" />
			</div>
		</Transition>
	</router-view>
</template>

<script setup>
	import {ref,watch} from 'vue';
	import router from './router/index';
	import navbian from './components/navbian.vue';
	router.push('/index')
	const id = ["指南", "介绍", "工具", "考据", "资源"] //nav的标题内容
</script>

<style scoped>
</style>
