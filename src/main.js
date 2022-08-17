import { createApp } from 'vue'
import {
	createStore 
} from 'vuex'
import ElementPlus from 'element-plus'
import style from './style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//创建一个新的store实例
const store = createStore({
	state(){
		return{
			count:0
		}
	},
	mutations:{
		increment(state){
			state.count++
		}
	}
})
app.use(router).use(store).use(ElementPlus).mount('#app')