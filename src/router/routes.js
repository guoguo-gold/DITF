const routes = [
	{
		path:"/index",
		name:"index",
		component:() => import("../views/index.vue")
	},
	{
		path:"/history",
		name:"history",
		alias:"/wiki",
		component:() => import("../views/history.vue"),
		children: [
			{
				path: 'character',
				component:() => import("../components/character.vue"),
				children : [
					{
						path: 'index',
						component:() => import("../components/character_index.vue")
					},
					{
						path: 'char',
						component:() => import("../components/char_view.vue")
					}
				],
			},
			{
				path: 'index',
				component:() => import("../components/wiki_index.vue"),
			}
		],
	},
	{
		path:"/document",
		name:"document",
		component:() => import("../views/tools.vue"),
		children: [
			{
				path: 'PDF',
				component:() => import("../components/Merg2PDF.vue"),
			},
			{
				path: 'attribute',
				component:() => import("../components/attribute/attribute.vue"),
				children: [
					{
						path: 'index',
						component:() => import("../components/attribute/index.vue")
					},
					{
						path: 'char',
						component:() => import("../components/attribute/char.vue")
					}
				]
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