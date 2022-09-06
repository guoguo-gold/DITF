<template>
  <div class="table-box layui-anim layui-anim-scaleSpring">
    <div class="table">
      <div class="table-row">
        <div class="table-item" style="height: 200px">
          <div class="table-item-title" style="
            width: 200px;
            border-top: 1px solid rgba(153,153,153,0.3);
            border-bottom: 1px solid rgba(153,153,153,0.3);
            border-left: 1px solid rgba(153,153,153,0.3);
            border-top-left-radius: 5px;
            overflow: hidden;
          ">
            <img src="/src/assets/1.jpeg" style="width: 100%;height:100%"/>
          </div>
          <div class="table-item-content" style="
            border-top-right-radius: 5px;
            overflow: hidden;
          ">
            <lay-tab type="card" style="height:100%;width: 100%;margin: 0;" v-model="current5">
              <lay-tab-item class="mianban" title="基础面板" id="1">
                <div class="table-row">
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">生命</div>
                    <div class="table-item-content" style="width: 50px">1140</div>
                  </div>
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">攻击</div>
                    <div class="table-item-content" style="width: 50px">2000</div>
                  </div>
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">防御</div>
                    <div class="table-item-content" style="width: 50px">123</div>
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">元素精通</div>
                    <div class="table-item-content" style="width: 50px">1140</div>
                  </div>
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">元素充能效率</div>
                    <div class="table-item-content" style="width: 50px">123</div>
                  </div>
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">防御</div>
                    <div class="table-item-content" style="width: 50px">123</div>
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">元素精通</div>
                    <div class="table-item-content" style="width: 50px">1140</div>
                  </div>
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">元素充能效率</div>
                    <div class="table-item-content" style="width: 50px">123</div>
                  </div>
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">防御</div>
                    <div class="table-item-content" style="width: 50px">123</div>
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">元素精通</div>
                    <div class="table-item-content" style="width: 50px">1140</div>
                  </div>
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">元素充能效率</div>
                    <div class="table-item-content" style="width: 50px">123</div>
                  </div>
                  <div class="table-item">
                    <div class="table-item-title" style="border-right: 1px solid rgba(153,153,153,0.2);width:100px">防御</div>
                    <div class="table-item-content" style="width: 50px">123</div>
                  </div>
                </div>
              </lay-tab-item>
              <lay-tab-item title="武器属性" id="2">
                <div class="table-row">
                  <div class="table-item">
                    <div class="table-item-title">1</div>
                    <div class="table-item-content">2</div>
                  </div>
                </div>
              </lay-tab-item>
              <lay-tab-item title="额外增益" id="3">
                <div class="table-row">
                  <div class="table-item">
                    <div class="table-item-title">1</div>
                    <div class="table-item-content">2</div>
                  </div>
                </div>
              </lay-tab-item>
              <lay-tab-item title="圣遗物" id="4">
                <div class="table-row">
                  <div class="table-item">
                    <div class="table-item-title">1</div>
                    <div class="table-item-content">2</div>
                  </div>
                </div>
              </lay-tab-item>
              <lay-tab-item title="选择敌人" id="5">
                <div class="table-row">
                  <div class="table-item">
                    <div class="table-item-title">1</div>
                    <div class="table-item-content">2</div>
                  </div>
                </div>
              </lay-tab-item>
            </lay-tab>
          </div>
        </div>
      </div>
      <div class="table-row">
        <div style="height: 200px"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const current5 = ref("1")

</script>

<style scoped>
.table-box{
  display: flex;
  justify-content: center;
  flex-flow:row wrap;
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
}
/**/
.table-item:last-child{
}
/**/
.table-item-title{
  font-weight: bold;
  user-select: none;
  color: black;
}
/**/
.table-item-content{
  flex-grow: 2;
}
.layui-tab-card{
  border:0
}
:global(.layui-tab-title){
  border:0
}
:global(.layui-tab-card .layui-tab-head){
  background-color: rgba(15,135,255,0.8);
  color: white;
}
:global(.layui-tab-content){
  padding: 0;
}
.mianban .table-item-title{
  border-left: 1px solid rgba(153,153,153,0.2);
  border-bottom: 1px solid rgba(153,153,153,0.2);
  background-color: #fafafa;
  font-weight: normal;
}
.mianban .table-item-content{
  border-bottom: 1px solid rgba(153,153,153,0.2);
  font-weight: normal;
}
.mianban .table-item:last-child{
  border-right: 1px solid rgba(153,153,153,0.2);
}
</style>