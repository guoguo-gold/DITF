<template>
	<navbian :msg="id">
	</navbian>
  <el-scrollbar style="height:calc(100vh - 56px)">
    <lay-notice-bar leftIcon="layui-icon-mute" rightIcon="layui-icon-close" text="项目正在开发中。。。" mode="closeable" background="#ecf5ff"	></lay-notice-bar>
    <router-view class="layui-anim layui-anim-fadei" v-slot="{ Component }">
      <Transition name="slide" appear>
        <div>
          <component :is="Component" />
        </div>
      </Transition>
    </router-view>
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
