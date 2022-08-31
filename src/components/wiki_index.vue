<template>
  <div class="game_box">
    <el-scrollbar>
      <div class="menu">
        <lay-select v-model="value">
          <lay-select-option v-for="item in game" :value=item.value :label=item.label></lay-select-option>
        </lay-select>
        <lay-dropdown updateAtScroll>
          <lay-ripple><lay-button>版本选择<lay-badge style="position:absolute;top:5px;right:5px" type="dot" theme="blue" ripple></lay-badge></lay-button></lay-ripple>
          <template #content>
            <lay-dropdown-menu>
              <lay-dropdown-menu-item v-for="edition in edition">{{edition.title}}<lay-badge v-if="edition.isnew" style="position:absolute;top:5px;right:5px" type="dot" theme="blue" ripple></lay-badge></lay-dropdown-menu-item>
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
      <div class="content layui-anim layui-anim-upbit">
        <lay-field v-for="field in legend" :title="field.title"><div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div></lay-field>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue'
const value = ref("1")
const options = [
  {
    value:1,
    label:"ok",
    children:[
      {
        value:1,
        label:"ok"
      },
      {
        value:1,
        label:"ok"
      }
    ],
  }
]
const game = [                                //菜单下拉框
  {value:"1",label:"原神"},
  {value:"2",label:"碧蓝航线"},
  {value:"3",label:"明日方舟"}
]
const legend = ref([                    //content菜单
  {title:"版本热点"},
  {title:"热门视频"},
  {title:"攻略合集"},
])
const edition = [                             //版本下拉框菜单
  {title:"3.2",isnew:true},
  {title:"3.1",isnew:false},
  {title:"3.0",isnew:false},
]
const active1 = ref("1")
watch(value,(newvalue)=>{
  console.log()
})
onMounted(()=>{
  var field =document.getElementsByTagName("legend")
  field[0].innerHTML = "<i class='layui-icon layui-icon-fire'></i>&nbsp<a name='docend'>"+field[0].textContent+"</a>"
  field[1].innerHTML = "<i class='layui-icon layui-icon-star'></i>&nbsp<a name='docend'>"+field[1].textContent+"</a>"
  field[2].innerHTML = "<i class='layui-icon layui-icon-star-fill'></i>&nbsp<a name='docend'>"+field[2].textContent+"</a>"
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
    margin: 0 10px 0 0;
  }
  .menu{
    display: flex;
    justify-content: flex-start;
    margin: 5px 5px 0 5px;
  }
  :global(.layui-field-box){
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: calc(100% - 200px);
  }
</style>