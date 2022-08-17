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
		component:() => import("../views/tools.vue")
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