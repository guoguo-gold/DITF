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
			Tabindex:4,
			TabsValue:1,
			character_card:["八重神子","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴","刻晴","魈","琴"],
			Tabs:[
				{
					title: '首页',
					name: '1',
					closeable: false,
					content: 'Tab 1 content',
				},
			]
		}
	},
	mutations:{
		addTab(state,tag){
			state.Tabindex++
			state.Tabs.push(tag)
		},
		back(state){
			state.TabsValue="1"
		},
		removeTab(state,target){
			for(let i=1;i<state.Tabs.length+1;i++){
				if(target.targetName == state.Tabs[i-1].name){
					state.Tabs.splice(i-1,1)
				}
			}
		},
		load_success(state){
			state.loading = false
		}
	}

})
app.use(router).use(store).use(ElementPlus).mount('#app')