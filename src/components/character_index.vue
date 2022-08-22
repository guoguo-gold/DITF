<template>
  <el-space wrap size="large">
    <el-card class="box-card" v-for="items in character" shadow="hover" body-style="padding:0" style="cursor:pointer;" @click="zhang">
      <img src="../assets/1.jpeg"/>
      <div class="name">{{items}}</div>
    </el-card>
  </el-space>
</template>

<script setup>
import {ref} from "vue";
import { useStore } from 'vuex'

const store = useStore()

const character = ref([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10])
const zhang = ()=>{
  store.commit("addTab",{
    tag:{
      title: 'Tab 2',
      name: '4',
      closeable: true,
      content: 'Tab 2 content',
    }
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