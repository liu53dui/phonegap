import home from'./home.vue';
import news from'./news.vue';
import user from'./user.vue';
import login from'./login.vue';
import reg from'./reg.vue';
import detail from'./detail.vue';

//配置路由
const routes=[
	{path:'/home',component:home},
	{
		path:'/news',
		component:news,
		children:[
			{path:'detail/:aid',component:detail}
		]
	},
	{
		path:'/user',
		component:user,
		children:[
			{path:'login',component:login},
			{path:'reg',component:reg}
		]
	},
	{path:'/',redirect:'./home'}
];

export default {
	routes
};