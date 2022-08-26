<!--
  table-box：整个表格框架
  table：表格所在区域（采用flex布局，主轴居中）
  table-title：表格大标题
  table-row：表格行组件
  table-item：单元格组件（自适应排列行）
-->
<template>
  <div class="table-box">
    <div class="table">
      <div class="table-title">{{name}}</div>
      <div class="table-row">
        <div class="table-item"><div class="table-item-title">角色名称</div><div class="table-item-content"><span>{{ name }}</span></div></div>
        <div class="table-item"><div class="table-item-title">人物介绍</div><div class="table-item-content"><span>content</span></div></div>
      </div>
      <div class="table-row">
        <div class="table-item"><div class="table-item-title">人物个性</div><div class="table-item-content">
          <el-tag
            v-for="xingge in SpeCharacter"
            :key="xingge.label"
            :type="xingge.type"
            class="mx-1"
            effect="light"
            hit
          >
          {{ xingge.label }}
        </el-tag></div></div>
      </div>
      <div class="table-row">
        <div class="table-item"><div class="table-item-title">语录</div><div class="table-item-content"><span>心有所向，日复一日，必有精进。</span></div></div>
      </div>
      <div class="table-row">
        <div class="table-item tianfu"><div class="table-item-title tianfu">天赋材料</div><div class="table-item-content"><div>????</div></div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {onMounted, ref} from "vue";
  import {useRouter} from 'vue-router'
  const router = useRouter()
  const name = ref()
  name.value = router.currentRoute.value.query.c
  const SpeCharacter = [
    { type: '', label: '特别认真' },
    { type: 'success', label: '责任心极强' },
    { type: 'info', label: '兽耳' },
    { type: 'danger', label: 'Tag 4' },
    { type: 'warning', label: 'Tag 5' },
  ]
  const routerBefore = router.beforeEach((to, from) => {
    name.value = to.query.c
  })
  const tableHover = ()=>{
    $(".table-item").hover(function(){
      $(this).stop().animate({"opacity":"0.7"},200)
    },function(){
      $(this).stop().animate({"opacity":"1"},200)
    })
  }
  onMounted(()=>{
    tableHover()
  })
</script>

<style scoped>
  .table-box{
    display: flex;
    justify-content: center;
    flex-flow:row wrap;
  }
  .table-title{
    width: 5em;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    text-align: center;
  }
  .table{
    width: 800px;
    overflow: hidden;
  }
  /**/
  .table-row{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(153,153,153,0.2);
    line-height: 40px;
  }
  .table-row:nth-child(2){
    border-top: 1px solid rgba(153,153,153,0.2);
  }
  /**/
  .table-item{
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    flex-grow: 1;
    font-size: 15px;
    text-align: center;    /*规定文字是否居中*/
  }
  /**/
  .table-item:last-child{
    border-right:1px solid rgba(153,153,153,0.4);
  }
  /**/
  .table-item-title{
    flex-grow: 1;
    background-color: rgba(255,192,203,1);
    border-left:1px solid rgba(153,153,153,0.4);
    font-weight: bold;
    color: rgba(255,255,255,1);
    user-select: none;
  }
  /**/
  .table-item-content{
    flex-grow: 2;
    border-left:1px solid rgba(153,153,153,0.4);
  }
  .tianfu{
    width: 100%;
  }
</style>