<template>
  <el-space class="layui-anim layui-anim-fadein" wrap size="large">
    <el-card class="box-card" v-for="items in character" shadow="hover" body-style="padding:0" style="cursor:pointer;" @click="zhang(items)">
      <img src="../assets/1.jpeg"/>
      <div class="name">{{items}}</div>
    </el-card>
  </el-space>
</template>

<script setup>
import {onMounted, ref} from "vue";
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
const store = useStore()
const character = store.state.character_card   //控制卡片数量

const zhang = (items)=>{
  store.commit("addTab",{
      title: String(items),
      name: String(store.state.Tabindex),
      closeable: true,
      content: 'Tab content',
  })
}
</script>

<style scoped>
  .box-card{
    display: flex;
    justify-content: space-between;
  }
  .el-card{
    height: 120px;
    width: 100px;
  }
  .el-card img{
    width: 100%;
  }
  .el-card .name{
    text-align: center;
  }
</style>