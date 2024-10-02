import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import jiashiyuanList from '../pages/jiashiyuan/list'
import jiashiyuanDetail from '../pages/jiashiyuan/detail'
import jiashiyuanAdd from '../pages/jiashiyuan/add'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import cheliangdengjiList from '../pages/cheliangdengji/list'
import cheliangdengjiDetail from '../pages/cheliangdengji/detail'
import cheliangdengjiAdd from '../pages/cheliangdengji/add'
import weixiuxinxiList from '../pages/weixiuxinxi/list'
import weixiuxinxiDetail from '../pages/weixiuxinxi/detail'
import weixiuxinxiAdd from '../pages/weixiuxinxi/add'
import shiguxinxiList from '../pages/shiguxinxi/list'
import shiguxinxiDetail from '../pages/shiguxinxi/detail'
import shiguxinxiAdd from '../pages/shiguxinxi/add'
import weizhangxinxiList from '../pages/weizhangxinxi/list'
import weizhangxinxiDetail from '../pages/weizhangxinxi/detail'
import weizhangxinxiAdd from '../pages/weizhangxinxi/add'
import cheliangyunyingList from '../pages/cheliangyunying/list'
import cheliangyunyingDetail from '../pages/cheliangyunying/detail'
import cheliangyunyingAdd from '../pages/cheliangyunying/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'jiashiyuan',
					component: jiashiyuanList
				},
				{
					path: 'jiashiyuanDetail',
					component: jiashiyuanDetail
				},
				{
					path: 'jiashiyuanAdd',
					component: jiashiyuanAdd
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'cheliangdengji',
					component: cheliangdengjiList
				},
				{
					path: 'cheliangdengjiDetail',
					component: cheliangdengjiDetail
				},
				{
					path: 'cheliangdengjiAdd',
					component: cheliangdengjiAdd
				},
				{
					path: 'weixiuxinxi',
					component: weixiuxinxiList
				},
				{
					path: 'weixiuxinxiDetail',
					component: weixiuxinxiDetail
				},
				{
					path: 'weixiuxinxiAdd',
					component: weixiuxinxiAdd
				},
				{
					path: 'shiguxinxi',
					component: shiguxinxiList
				},
				{
					path: 'shiguxinxiDetail',
					component: shiguxinxiDetail
				},
				{
					path: 'shiguxinxiAdd',
					component: shiguxinxiAdd
				},
				{
					path: 'weizhangxinxi',
					component: weizhangxinxiList
				},
				{
					path: 'weizhangxinxiDetail',
					component: weizhangxinxiDetail
				},
				{
					path: 'weizhangxinxiAdd',
					component: weizhangxinxiAdd
				},
				{
					path: 'cheliangyunying',
					component: cheliangyunyingList
				},
				{
					path: 'cheliangyunyingDetail',
					component: cheliangyunyingDetail
				},
				{
					path: 'cheliangyunyingAdd',
					component: cheliangyunyingAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
