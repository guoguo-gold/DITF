<template>
  <el-row>
    <el-col>
      <el-menu
          class="el-menu-vertical-demo"
          default-active="2"
          menu-trigger="hover"
          :collapse = "collapse"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><img class="cover" style="width:100%" src="/src/assets/IMG_202208199610_png.png" /></el-icon>
            <span>原神</span>
          </template>
          <el-menu-item index="1-1">角色</el-menu-item>
          <el-menu-item index="1-2">武器</el-menu-item>
          <el-menu-item index="1-3">圣遗物</el-menu-item>
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
  <router-view></router-view>
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
    top: 55px;
  }
</style>