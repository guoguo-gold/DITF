<template>
  <el-scrollbar
      height="calc(100vh - 56px)"
  >
    <div class="box">
      <el-calendar ref="va">
        <template #header="{ date }">
          <span>日历</span>
          <span>
            {{ date.day}}
          </span>
          <el-button-group>
            <el-button size="small" @click="selectDate('prev-year')"
            >上年</el-button
            >
            <el-button size="small" @click="selectDate('prev-month')"
            >上月</el-button
            >
            <el-button size="small" @click="selectDate('today')">当天</el-button>
            <el-button size="small" @click="selectDate('next-month')"
            >下月</el-button
            >
            <el-button size="small" @click="selectDate('next-year')"
            >下年</el-button
            >
          </el-button-group>
        </template>
      </el-calendar>
      <div class="poss">
        <el-progress type="dashboard" :percentage="40">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">用户满意度</span>
          </template>
        </el-progress>
        <el-progress type="dashboard" :percentage="30">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">wiki完成进度</span>
          </template>
        </el-progress>
      </div>
      <el-steps
          direction="vertical"
          :space="100"
          :active="3"
      >
        <el-step title="2022-8-22" description="更新"/>
        <el-step title="2022-8-22" description="更新"/>
        <el-step title="2022-8-22" description="更新考据"/>
        <el-step title="2022-8-22" description="更新原神wiki"/>
        <el-step title="???" description="更新原神工具"/>
        <el-step title="???" description="更新考据"/>
      </el-steps>
    </div>
  </el-scrollbar>
</template>

<script setup>
  import {ref} from 'vue'
  const va = ref()
  const selectDate = (val)=>{
      va.value.selectDate(val)
  }
</script>

<style scoped>
  .box{
    margin: 0 auto;
    width: 1000px;
    border-left: 1px solid rgba(153,153,153,0.1);
    border-right: 1px solid rgba(153,153,153,0.1);
  }
  .el-steps{
    margin: 0 20px;
  }
  .percentage-value {
     display: block;
     margin-top: 10px;
     font-size: 28px;
   }
  .percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 12px;
  }
  .el-progress{
    margin: 20px;
  }
  .poss{
    display: flex;
    justify-content: center;
  }
</style>