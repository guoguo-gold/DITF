<template>
  <div class="box">
    <el-page-header content="首页" @back="go_back" title="选择角色" />
    <el-tabs
        v-model="editableTabsValue"
        type="card"
        class="demo-tabs"
        @tab-remove="removeTab"
    >
      <el-tab-pane
          v-for="item in editableTabs"
          :closable="item.closeable"
          :key="item.name"
          :label="item.title"
          :name="item.name"
      >
        <el-scrollbar style="height:calc(100vh - 56px - 200px)">
          <router-view
              :v-loading = "loading"
              element-loading-text="正在加载"
          >
          </router-view>
          {{item}}
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import {computed, ref, watch} from 'vue'
import router from '../router'
import {useStore} from 'vuex'
const store = useStore()
let tabIndex = 2
const loading = ref(true)
const editableTabsValue = String(store.state.TabsValue)
const editableTabs = store.state.Tabs
/*let good = setTimeout(()=>{
  loading.value = true
},2000)*/
const addTab = (targetName: string) => {    //添加Tag
  const newTabName = `${++tabIndex}`
  editableTabs.value.push({
    title: 'New Tab',
    name: newTabName,
    closeable: true,
    content: 'New Tab content',
  })
  editableTabsValue.value = newTabName
}

const go_back = () => {   //返回到首页
  router.push('/history/character/index');
  store.commit("back");
}
const removeTab = () =>{    //移除Tag

}
router.push('/history/character/index');
</script>
<style>
.box{
  position: absolute;
  left: 350px;
  width: calc(100vw - 400px);
  height: calc(100vh - 56px);
  z-index: 0;
}
.el-page-header{
  height: 50px;
  line-height: 50px;
}
.el-page-header__left:hover{
  color: #2c8dfb;
}
</style>