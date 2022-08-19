const routes = [
	{
		path:"/index",
		name:"index",
		component:() => import("../views/index.vue")
	},
	{
		path:"/history",
		name:"history",
		component:() => import("../views/history.vue")
	},
	{
		path:"/document",
		name:"document",
		component:() => import("../views/tools.vue"),
		children: [
			{
				// 当 /user/:id/profile 匹配成功
				// UserProfile 将被渲染到 User 的 <router-view> 内部
				path: 'PDF',
				component:() => import("../components/Merg2PDF.vue"),
			},
		],
	},
	{
		path:"/research",
		name:"research",
		component:() => import("../views/research.vue")
	},
	{
		path:"/source",
		name:"source",
		component:() => import("../views/source.vue")
	}
]
export default routes