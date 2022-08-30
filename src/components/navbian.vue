<template>
  <lay-progress id="Progress" percent="100" theme="blue" style="height: 2px;display: none;"></lay-progress>
	<div class="nav_component">
		<div class="title">
			<div class="logo" @click="drawer=true">
				<img src="../assets/1.jpeg"/>
				<div class="title_name">DITF</div>
			</div>
		</div>
		<nav>
			<ul>
        <li v-for="(item,i) in msg"><router-link :to="rout[i]">{{ item  }}<div class="xiahua"></div></router-link></li>
			</ul>
		</nav>
	</div>
<!--  抽屉  -->
  <el-drawer
      v-model="drawer"
      title="感谢以下人员对本网站的支持"
      direction="ltr"
      size="15%"
  >
    <div v-for="item in name" style="display: flex;align-items: center"><el-avatar src="src/assets/guo.jpeg" style="margin:10px 10px"/><span>{{item}}站长</span></div>
  </el-drawer>
</template>

<script setup>
	import {
		onMounted,ref,watch
	} from 'vue'
	import router from '../router/index';
  import {useStore}  from "vuex";

  const props = defineProps({
		msg: {
			type: Object,
		}
	})
  const store = useStore()
	const rout = ["/index","/wiki/index","/document","/research","/source"] //真
  const routes = ["/index","/wiki","/document","/research","/source"]  //假
	const index_n = ref(0); //记录当前导航i-1
	const luyou = ref(router.currentRoute);
  const drawer = ref(false)
  const name = ["果果","哈哈"]

  //生命周期
  onMounted(() => {
		var a = document.querySelectorAll("ul li");
		for (let i = 0; i < a.length; i++) {
			a[i].onmouseover = function() {
				$(this).children(":eq(0)").stop(true).animate({"color":"pink"},200);
			}
			a[i].onmouseout = function() {
				$(this).children(":eq(0)").stop(true).animate({"color":"rgba(0,0,0,1)"},200);
			}
			a[i].onclick = function() {
				// for (let i = 0; i < a.length; i++) {
				// 	a[i].childNodes[1].style.display = "none";
				// }
				// this.childNodes[1].style.display = "block";
				index_n.value = i;
			}
		}
		// watch(index_n,(nindex) => {
		// 	for (let i = 0; i < a.length; i++) {
		// 		a[i].childNodes[0].childNodes[1].style.display = "none";
		// 	}
		// 	a[nindex].childNodes[0].childNodes[1].style.display = "block";
		// })
		watch(luyou,(newlu) => {
			for(let i=0;i< rout.length;i++){
				if("/"+newlu.fullPath.split("/")[1] == routes[i]){
					a[i].childNodes[0].childNodes[1].style.display = "block";
				}
				else{
					a[i].childNodes[0].childNodes[1].style.display = "none";
				}
			}

		})
    let progress_an
    var progress= document.getElementById("Progress")
/*    router.beforeEach((to, from) => {
      // ...
      // 返回 false 以取消导航
      let p_width = 0
      clearInterval(progress_an)
      progress.style.display="block"
      progress.children[0].style.width = 0
      progress_an = setInterval(()=>{
        progress.children[0].style.width = "10%"
        if(store.state.progress==100){
          progress.children[0].style.width = String(store.state.progress)+"%"
          store.commit("success_progress",0)
          clearInterval(progress_an)
        }
        // console.log("no_ok")
      },1000/60)
      /!*      progress_an = setInterval(()=>{
        p_width+=(Math.random(10))
        progress.children[0].style.width = String(p_width)+"%"
        if(p_width>=100){
          clearInterval(progress_an)
        }
      },500)*!/
    })*/
		
		var t = document.querySelector(".logo");
		t.onmouseover = function() {
			$(this).stop(true).animate({"opacity":"0.7"},200);
		}
		t.onmouseout = function() {
			$(this).stop(true).animate({"opacity":"1"},200);
		}
	})
</script>
<style scoped>
	a{
		display: block;
		height: 100%;
		width: 100%;
	}
  .layui-progress{
    position: fixed;
    width: calc(100vw);
    height: 2px;
  }
	@media screen and (min-width:800px) {
		.nav_component {
			display: flex;
			width: 100%;
			height: 55px;
			border-bottom: 1px solid rgba(153, 153, 153, 0.2);
			align-items: center;
			z-index: 100;
		}
		.title{
			height: 55px;
			flex-grow: 1;	
			user-select: none;
			cursor: pointer;
		}
		.title div{
			height: 55px;
			margin: 0 20px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		.title_name{
			font-size: 30px;
			font-weight: bold;
			color: transparent;
			background:-webkit-linear-gradient(220deg,pink 25%,skyblue);
			-webkit-background-clip: text !important;
		}
		.title div img{
			height: 50px;
			border-radius: 5px;
		}
		nav {
			flex-grow: 1;
		}
		nav ul{
			list-style: none;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		nav ul li{
			position: relative;
			flex-grow: 1;
			height: 55px;
			line-height: 55px;
			text-align: center;
			cursor: pointer;
			font-size: 13px;
			user-select: none;
		}
		nav ul li .xiahua{
			display: none;
			position: absolute;
			bottom: 2px;
			height: 2px;
			width: 30px;
			border-bottom:1px solid pink;
			left: calc(50% - 15px);
		}
	}
	@media screen and (max-width:800px) {
		.nav_component {
			display: flex;
			width: 100%;
			height: 55px;
			border-bottom: 1px solid rgba(153, 153, 153, 0.2);
			align-items: center;
		}
		.title{
			display: none;
		}
		nav {
			flex-grow: 1;
		}
		nav ul{
			list-style: none;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		nav ul li{
			flex-grow: 1;
			height: 55px;
			line-height: 55px;
			text-align: center;
			cursor: pointer;
			font-size: 13px;
			user-select: none;
		}
	}
</style>
