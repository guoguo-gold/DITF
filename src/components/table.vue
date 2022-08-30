<!--
  table-box：整个表格框架
  table：表格所在区域（采用flex布局，主轴居中）
  table-title：表格大标题
  table-row：表格行组件
  table-item：单元格组件（自适应排列行）
-->
<template>
  <div class="table-box layui-anim layui-anim-scaleSpring">
    <div class="table">
      <div class="table-title">{{char.name}}</div>
      <div class="table-row">
        <div class="table-item"><div class="table-item-title">角色名称</div><div class="table-item-content"><span>{{ char.name }}</span></div></div>
        <div class="table-item"><div class="table-item-title">人物介绍</div><div class="table-item-content"><span>{{ char.introduce }}</span></div></div>
      </div>
      <div class="table-row">
        <div class="table-item"><div class="table-item-title">人物个性</div><div class="table-item-content">
          <el-tag
            v-for="xingge in s"
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
        <div class="table-item"><div class="table-item-title">语录</div><div class="table-item-content"><span>{{ char.spoken }}</span></div></div>
      </div>
      <div class="table-row">
        <div class="table-item tianfu"><div class="table-item-title tianfu">天赋材料</div><div class="table-item-content"><div>????</div></div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {onMounted, ref, watch} from "vue";
  import {useRouter, onBeforeRouteUpdate} from 'vue-router'
  import {ElNotification} from "element-plus";
  import {useStore} from "vuex";
  const store = useStore()
  const router = useRouter()
  const char = ref(store.state.character)
  let spe = char.value.special.split("???")
  let s = ref([])
  for(let i in spe){
    s.value.push(eval('('+spe[i]+')'))
  }
/*  const ajax_router = ()=>{
    $.ajax({
      type:'get', //请求方式
      url:"http://127.0.0.1/DITF/character.php",  //请求地址
      data:{
        name:name.value
      },
      success:function(){

      },
      error:function(){
        ElNotification({
          type: 'error',
          message: `请求失败`,
        })
      }
    })
  }*/
  onBeforeRouteUpdate((to, from) =>{
    char.value = store.state.character
    s.value = []
    spe = char.value.special.split("???")
    for(let i in spe){
      s.value.push(eval('('+spe[i]+')'))
    }
  })
 /* const routerBefore = router.beforeEach((to, from) => {
    name.value = to.query.c
    $.ajax({
      type:'get', //请求方式
      url:"http://127.0.0.1/DITF/character.php",  //请求地址
      data:{
        name:name.value
      },
      success:function(){

      },
      error:function(){
        ElNotification({
          type: 'error',
          message: `请求失败`,
        })
      }
    })
  })*/
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
    width: 200px;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    text-align: center;
  }
  .table{
    width: 800px;
    overflow: hidden;
    border-radius:10px
  }
  /**/
  .table-row{
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    margin: 2px;
    border-radius: 5px;
  }
  /**/
  .table-item{
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    flex-grow: 1;
    font-size: 15px;
    text-align: center;    /*规定文字是否居中*/
    border-radius: 5px;
    border:1px solid rgba(255,192,203,1);
    overflow: hidden;
  }
  /**/
  .table-item:last-child{
  }
  /**/
  .table-item-title{
    width: 200px;
    background-color: rgba(255,192,203,1);
    font-weight: bold;
    color: rgba(255,255,255,1);
    user-select: none;
  }
  /**/
  .table-item-content{
    flex-grow: 2;
  }
  .tianfu{
    width: 100%;
  }
</style>