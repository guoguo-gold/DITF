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
  <Table></Table>
</template>

<script setup>
import {onMounted} from "vue";
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import Table from '../components/table.vue'
const router = useRouter()
const store = useStore()
const size = "default"
</script>

<style scoped>
  .margin-top{
    width: calc(50%);
  }
  .el-dropdown{
    display: none;
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

</style>