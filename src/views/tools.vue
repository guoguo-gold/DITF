<template>
  <router-view></router-view>
  <el-row>
    <el-col>
      <el-menu
          class="el-menu-vertical-demo"
          default-active="2"
          menu-trigger="hover"
          :collapse = "collapse"
          router
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><img class="cover" style="width:100%" src="/src/assets/IMG_202208199610_png.png" /></el-icon>
            <span>原神工具</span>
          </template>
          <el-menu-item index="1-1">角色属性计算器</el-menu-item>
          <el-menu-item index="1-2">圣遗物搭配</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Files /></el-icon>
            <span>PDF</span>
          </template>
            <el-menu-item index="/document/pdf">PDF合并</el-menu-item>
            <el-menu-item index="2-2" disabled>PDF拆分</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3" disabled>
          <template #title>
            <el-icon><Document /></el-icon>
            <span>Word</span>
          </template>
          <el-menu-item index="3-1">Word转PDF</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4" disabled>
          <template #title>
            <el-icon><document /></el-icon>
            <span>EXCEL</span>
          </template>
        </el-sub-menu>
        <el-sub-menu index="5" disabled>
          <template #title>
            <el-icon><Files /></el-icon>
            <span>PPT</span>
          </template>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
  <el-switch
      v-model="collapse"
      inline-prompt
      active-text="收起"
      inactive-text="展开"
      size = "large"
  />

</template>

<script setup>
import {ref, onMounted, onUpdated,onBeforeUpdate} from "vue";
const collapse = ref(false)

</script>

<style scoped>
  .el-row{
    width: 300px;
    height: calc(100vh - 56px);
  }
  .el-col ul{
    height: calc(100vh - 56px);
  }
  .el-switch{
    position: absolute;
    right: 10px;
    top: 0px;
  }
</style>