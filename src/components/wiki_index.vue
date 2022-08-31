<template>
  <div class="game_box">
    <el-scrollbar>
      <div class="menu">
        <lay-select v-model="value">
          <lay-select-option v-for="item in game" :value=item.value :label=item.label></lay-select-option>
        </lay-select>
        <lay-dropdown updateAtScroll>
          <lay-ripple><lay-button>版本选择</lay-button></lay-ripple>
        <template #content>
          <lay-dropdown-menu>
            <lay-dropdown-menu-item>3.2</lay-dropdown-menu-item>
            <lay-dropdown-menu-item>3.1</lay-dropdown-menu-item>
            <lay-dropdown-menu-item>3.0</lay-dropdown-menu-item>
          </lay-dropdown-menu>
        </template>
        </lay-dropdown>
      </div>
      <lay-carousel class="layui-anim layui-anim-upbit" v-model="active1">
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
      <div class="content">
        <lay-field title="版本热点">
          <div></div>
        </lay-field>
        <lay-field title="热门视频">
          <div></div>
        </lay-field>
        <lay-field title="攻略合集">
          <div></div>
        </lay-field>
      </div>
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
  }
  .edition{
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .content{
    margin: 50px 100px;
  }
  .layui-unselect{
    width: 150px;
    text-align: center;
  }
  .menu{
    display: flex;
    justify-content: flex-start;
    margin: 5px 5px 0 5px;
  }
</style>