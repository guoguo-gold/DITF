<template>
  <router-view></router-view>
  <el-row>
    <el-col>
      <el-menu
          :collapse="collapse"
          class="el-menu-vertical-demo"
          default-active="2"
          menu-trigger="hover"
          router
      >
        <el-menu-item index="/wiki/index">
          <el-icon><House /></el-icon>
          <template #title>首页</template>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><img class="cover" style="width:100%" src="/src/assets/IMG_202208199610_png.png" /></el-icon>
            <span>原神</span>
          </template>
          <el-menu-item index="/wiki/character/index">角色</el-menu-item>
          <el-menu-item index="1-2" disabled>武器</el-menu-item>
          <el-menu-item index="1-3" disabled>圣遗物</el-menu-item>
        </el-sub-menu>
        <el-button text bg type="primary" :icon="iconBut" @click="shou"></el-button>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import {ref, onMounted, onUpdated,onBeforeUpdate} from "vue";
import {useRouter} from "vue-router";
const iconBut = ref("ArrowLeft")
const collapse = ref(false)
const router = useRouter()
router.push("/wiki/index")
const shou = ()=>{
  if(!collapse.value) {
    collapse.value = true
    iconBut.value = "ArrowRight"
  }
  else{
    collapse.value = false
    iconBut.value = "ArrowLeft"
  }
}
</script>

<style scoped>
  .el-row{
    width: 300px;
    height: calc(100vh - 56px);
  }
  .el-col ul{
    height: calc(100vh - 56px);
  }
  .el-button{
    position: absolute;
    top: calc(50% - 25px);
    right: 0px;
    height: 50px;
    width: 5px;
  }
</style>