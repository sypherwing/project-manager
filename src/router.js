import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'


Vue.use(Router);


export default new Router({
	mode:'history',
	base:process.env.BASE_URL,
	routes:[
		{
			path:'/',
			component: Dashboard
		},
		{
			path:'/projects',
			component: Projects
		},
		{
			path:'/team',
			component: Team
		}
	]
});