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
			count:0,
			TabsValue:1,
			Tabs:[
				{
					title: '首页',
					name: '1',
					closeable: false,
					content: 'Tab 1 content',
				},
				{
					title: 'Tab 1',
					name: '2',
					closeable: true,
					content: 'Tab 1 content',
				},
				{
					title: 'Tab 2',
					name: '3',
					closeable: true,
					content: 'Tab 2 content',
				},
			]
		}
	},
	mutations:{
		increment(state){
			state.count++
		},
		back(state){
			state.TabsValue=1
		},
		addTab(state,tag){
			state.Tabs.push(tag)
		}
	}

})
app.use(router).use(store).use(ElementPlus).mount('#app')