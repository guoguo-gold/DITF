<template>
  <el-dropdown size="normal">
    <el-button color="rgb(255,192,203)" type="primary">
      快捷菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu id="introduce">
        <el-dropdown-item>人物介绍</el-dropdown-item>
        <el-dropdown-item>技能介绍</el-dropdown-item>
        <el-dropdown-item>天赋材料</el-dropdown-item>
        <el-dropdown-item>角色语音</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-carousel height="calc(100vh - 56px - 200px)" direction="vertical" :autoplay="false" loop="false">
    <el-carousel-item>
      <img src="../assets/2.jpeg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/2.jpeg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/2.jpeg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/2.jpeg">
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import {onMounted} from "vue";
import {useStore} from 'vuex'
const store = useStore()
const size = "default"
onMounted(()=> {
  const a = document.querySelectorAll("#introduce .el-dropdown-menu__item");
  for(let i=0;i<a.length;i++){
    a[i].onclick = ()=>{
      mySwiper[1].slideTo(i,1000,false)
    }
  }
})
</script>

<style scoped>
  .margin-top{
    width: calc(50%);
  }
  .el-dropdown{
    position: absolute;
    z-index: 100;
    left: calc(50vw - 200px);;
  }
  .el-button{
    color: white;
  }
  .cell-item {
    display: flex;
    align-items: center;
  }
  .el-carousel__item {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
  }

  .el-carousel__item img{
    position: absolute;
    height: 100%;
    width: 100%;
  }

</style>