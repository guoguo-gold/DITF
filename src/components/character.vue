<template>
  <div class="box">
    <el-page-header content="首页" @back="go_back" title="选择角色" />
    <el-tabs
        v-model="editableTabsValue"
        type="card"
        class="demo-tabs"
        @tab-remove="removeTab"
        @tab-click="route"
    >
      <el-tab-pane
          v-for="item in editableTabs"
          :closable="item.closeable"
          :key="item.name"
          :label="item.title"
          :name="item.name"
      >
        <div class="scroll_box">
          <el-scrollbar style="height:100%">
            <router-view>
            </router-view>
          </el-scrollbar>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import {computed, onDeactivated, onMounted, onUpdated, ref, watch} from 'vue'
import router from '../router'
import {useStore} from 'vuex'
import {ElNotification} from "element-plus";
const store = useStore()
let tabIndex = 2
const loading = ref(true)
const editableTabsValue = ref(String(store.state.TabsValue))
const editableTabs = store.state.Tabs
/*let good = setTimeout(()=>{
  loading.value = true
},2000)*/
onMounted(()=>{
  loading.value = false
})

const go_back = () => {   //返回到首页
  router.push('/wiki/character/index');
  store.commit("back");
  editableTabsValue.value = "1"
}
/*const a = router.beforeEach(async (to, from) => {
  console.log(to)
})*/
const removeTab = (targetName: string) =>{    //移除Tag
  store.commit("removeTab",{
    targetName:targetName
  })
}
const route = (pane: string)=>{
  if(pane.props.label!="首页"){
    $.ajax({
      type:'get', //请求方式
      url:"http://127.0.0.1/DITF/character.php",  //请求地址
      data:{
        name:pane.props.label
      },
      dataType:"json",
      success:function(msg){
        store.commit("char_translate",msg)
      },
      error:function(msg){
        ElNotification({
          type: 'error',
          message: msg.responseText ? msg.responseText:"获取数据库失败",
        })
      }
    }).then(()=>{router.push("/wiki/character/char?c="+pane.props.label)})
  }
  else{
    router.push("/wiki/character/index")
  }
}
router.push('/wiki/character/index');
</script>
<style scoped>
.box{
  position: absolute;
  left: 350px;
  width: calc(100vw - 400px);
  height: calc(100vh - 56px);
  z-index: 0;
}
.scroll_box{
  height: calc(100vh - 56px - 200px);
}
.el-page-header{
  height: 50px;
  line-height: 50px;
}
:global(.el-page-header__left:hover){
  color: #2c8dfb;
}
</style>