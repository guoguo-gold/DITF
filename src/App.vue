<template>
	<navbian :msg="id">
		<template v-slot:v1>这是一个插槽内容1</template>
		<template v-slot:v2>这是一个插槽内容2</template>
	</navbian>
</template>

<script setup>
	import navbian from './components/navbian.vue';
	const id = ["指南","历史","文档","考据","资源"]	//nav的标题内容
</script>

<style scoped>

</style>