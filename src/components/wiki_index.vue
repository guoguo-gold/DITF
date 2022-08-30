<template>
  <div class="game_box">
    <el-scrollbar>
      <lay-select v-model="value">
        <lay-select-option v-for="item in game" :value=item.value :label=item.label></lay-select-option>
      </lay-select>
      <lay-carousel v-model="active1">
        <lay-carousel-item id="1">
          <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#009688;">条目一</div>
        </lay-carousel-item>
        <lay-carousel-item id="2">
          <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#5FB878;">条目二</div>
        </lay-carousel-item>
        <lay-carousel-item id="3">
          <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FFB800;">条目三</div>
        </lay-carousel-item>
        <lay-carousel-item id="4">
          <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FF5722;">条目四</div>
        </lay-carousel-item>
      </lay-carousel>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {ref,watch} from 'vue'
const value = ref("1")
const game = [{value:"1",label:"原神"},{value:"2",label:"碧蓝航线"},{value:"3",label:"明日方舟"}]
const active1 = ref("1")
const edition = ref({
  label:"3.0",
})
watch(value,(newvalue)=>{
  console.log()
})
</script>

<style scoped>
  .game_box{
    position: absolute;
    left: 300px;
    height: calc(100vh - 56px);
    width: calc(100vw - 300px);
    z-index: 0;
    display: flex;
    justify-content: center;
  }
  .el-scrollbar{
    height: 100%;
    width: 100%;
    padding: 10px 30px;
  }
  .hezi{
    height:10000px;
  }
  .edition{
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .content{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .layui-unselect{
    margin: 0 0 10px 0;
  }
</style>