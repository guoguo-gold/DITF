<template>
	<navbian :msg="id">
    <template v-slot:v1></template>
    <template v-slot:v2></template>
	</navbian>
  <el-scrollbar style="height:calc(100vh - 56px)">
    <lay-notice-bar leftIcon="layui-icon-mute" rightIcon="layui-icon-close" text="项目正在开发中。。。" mode="closeable" background="#ecf5ff"	></lay-notice-bar>
    <div class="app_box">
      <router-view v-slot="{ Component }">
      </router-view>
    </div>
  </el-scrollbar>
</template>

<script setup>
	import {ref,watch} from 'vue';
	import router from './router/index';
	import navbian from './components/navbian.vue';
	router.push('/index')
	const id = ["指南", "wiki", "工具", "考据", "资源"] //nav的标题内容
</script>

<style scoped>
</style>
