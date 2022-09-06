<template>
  <div class="game_box layui-anim layui-anim-upbit">
    <el-scrollbar>
      <div class="menu">
        <lay-select v-model="value">
          <lay-select-option @click="getGame(item)" v-for="item in game" :value=item.value :label=item.label></lay-select-option>
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
<!--轮播图-->
      <lay-carousel v-model="active1">
        <lay-carousel-item v-for="src in swiper_img" :id="src.id">
          <lay-empty v-if="!src.url" ></lay-empty>
          <template v-else>
            <img :src=src.url />
          </template>
        </lay-carousel-item>
      </lay-carousel>
<!--content-->
      <div class="content layui-anim layui-anim-upbit">
        <lay-field title="版本热点"></lay-field>
        <lay-empty v-if="hot.length==0"></lay-empty>
        <div v-else>
          <div class="swiper" id="swiper3">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="i in hot">
                <div class="card">
                  <lay-empty v-if="i.img==''" description="暂无封面"></lay-empty>
                  <img v-else class="absolute" :src="i.img" />
                  <div class="no_hov absolute">
                    <div class="head absolute"><strong>{{i.title}}</strong></div>
                    <div class="evaluate flex_around">
                      <lay-icon size="30px" type="layui-icon-praise" color="white"></lay-icon><lay-icon type="layui-icon-layer" size="30px" color="white"></lay-icon><lay-icon size="30px" type="layui-icon-tread" color="white"></lay-icon>
                    </div>
                    <div class="foot absolute flex_between">
                      <span>发布日期：{{i.time}}</span>
                      <span>作者：{{i.author}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
            <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
          </div>
        </div>
        <lay-field title="热门视频"></lay-field>
        <lay-empty v-if="vid.length==0"></lay-empty>
        <lay-field title="攻略合集"></lay-field>
        <lay-empty  v-if="wal.length==0"></lay-empty>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {nextTick,onMounted, ref, watch} from 'vue'
import {ElNotification} from "element-plus";
const count = ref(0)
const value = ref("0")
//轮播图
const swiper_img = ref([])
//版本下拉框菜单
const edition = ref([])
//菜单下拉框
const game = [
  {value:"1",label:"原神"},
  {value:"2",label:"碧蓝航线"},
  {value:"3",label:"明日方舟"}
]
watch(value,()=>{
  edition.value = []
})
const getGame = (item)=>{
  $.ajax({
    type:'get', //请求方式
    url:"http://127.0.0.1/DITF/wikiIndex.php",  //请求地址
    data:{
      game:item.label
    },
    dataType:"json",
    success:function(msg){
      count.value = 0
      edition.value = []
      swiper_img.value = []
      let arr = msg.edition.split(",")
      let is_new = msg.isnew_edition.split(",")
      let img = msg.swiperurl.split(",")
      for(let i in arr){
        let a
        if(is_new[i].length == 5){
          a = false
        }
        else{
          a = true
        }
        swiper_img.value.push({id:String(count.value+=1),url:"/src/assets/"+img[i]})
        edition.value.push({title:arr[i],isnew:a})
      }
    },
    error:function(msg){
      ElNotification({
        type: 'error',
        message: msg.responseText ? msg.responseText:"获取数据库失败",
      })
      value.value = 0
      edition.value = []
      swiper_img.value = [{id:1,url:"../assets/swiper1.jpeg"}]
      console.log(swiper_img.value[0])
    }
  })
}

//content菜单
const hot = [
  {
    index:1,
    title:"版本前瞻",
    img:"",
    time:"4-26",
    author:"DITF",
  },
  {
    index:2,
    title:"版本前瞻",
    img:"",
    time:"4-26",
    author:"DITF",
  },
  {
    index:3,
    title:"版本前瞻",
    img:"",
    time:"4-26",
    author:"DITF",
  },
  {
    index:4,
    title:"版本前瞻",
    img:"",
    time:"4-26",
    author:"DITF",
  },
  {
    index:5,
    title:"版本前瞻",
    img:"",
    time:"4-26",
    author:"DITF",
  },
  {
    index:6,
    title:"版本前瞻",
    img:"",
    time:"4-26",
    author:"DITF",
  },
],vid = [],wal = []
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

const active1 = ref("1")
watch(value,(newvalue)=>{
  console.log()
})
onMounted(()=>{
  var field =document.getElementsByTagName("legend")
  field[0].innerHTML = "<i class='layui-icon layui-icon-fire' style='color:red'></i>&nbsp<a name='docend'>"+field[0].textContent+"</a>"
  field[1].innerHTML = "<i class='layui-icon layui-icon-star' style='color:red'></i>&nbsp<a name='docend'>"+field[1].textContent+"</a>"
  field[2].innerHTML = "<i class='layui-icon layui-icon-star-fill' style='color:rgb(255,192,0)'></i>&nbsp<a name='docend'>"+field[2].textContent+"</a>"
  //热点轮播
  var myswiper3 = new Swiper("#swiper3",{
    slidesPerView:3,  //可视数量
    spaceBetween:0,  //间距
    loop: true, // 循环模式选项
/*    centeredSlides: true,   //开启焦点
    centeredSlidesBounds: true,*/
    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  $(".no_hov").hover(function (){
    $(this).stop().animate({opacity:1},200,()=>{
      $(this).children(".head").animate({top:0},200)
    })
  },function (){
    $(this).stop().animate({opacity:0},200,()=>{
      $(this).children(".head").animate({top:"-50rem"},200)
    })
  })
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
    margin: 0 5px 0 0;
  }
  .menu{
    display: flex;
    justify-content: flex-start;
    margin: 5px 5px 0 5px;
  }
  .box{
    height: 1000px;
  }
  .layui-carousel li{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #swiper3 .swiper-slide{
    height: 300rem;
  }
  #swiper3 .swiper-slide .card{
    position: relative;
    height: calc(100% - 10px);
    width: calc(100% - 60px);
    margin: 5px 30px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  #swiper3 .swiper-slide .card img{
    height: 100%;
    width: 100%;
  }
  #swiper3 .swiper-slide .no_hov{
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.1);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    cursor: pointer;
  }
  .no_hov .head{
    top: -50rem;
    width: 100%;
    height: 50rem;
    color: white;
    font-size: 20px;
    line-height: 50rem;
    text-indent: 20rem;
  }
  .no_hov .foot{
    bottom: 0;
    width: 100%;
    height: 30rem;
    color: white;
    line-height: 30rem;
  }
  .no_hov .foot span{
    margin: 0 10px
  }
  .swiper-slide-active{ /*焦点角色*/

  }
  .swiper{
    --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
    --swiper-navigation-color: rgba(255,192,203,1);/* 单独设置按钮颜色 */
    --swiper-navigation-size: 20px;/* 设置按钮大小 */
  }
  .evaluate{
    width: 100%;
  }
  .layui-carousel img{
    width: 100%;
  }
  .edition_id{
    width: 100px;
    line-height: 38px;
    text-align: center;
  }
</style>