import Vue from 'vue'
import Router from 'vue-router'
import Header_search from '../components/Commons/Header_search'
import Home from '../components/Home/Home'
import Search from '../components/Search/Search'
import SearchAfter from '../components/SearchAfter/SearchAfter'
import SearchNav from '../components/SearchAfter/SearchNav'
import SearchList from '../components/SearchAfter/SearchList'
import Details from '../components/Details/Details'
import My from '../components/My/My'
import Tabs from '../components/My/Tabs'
import Contribute from '../components/My/Contribute'
import Reg from '../components/Reg/Reg'
import Log from '../components/Log/Log'
import NotFound from '../components/SearchAfter/SearchNotFound'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
    {
      path: '/Header-search',
      name: 'Header-search',
      component: Header_search
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/SearchAfter',
      name: 'SearchAfter',
      component: SearchAfter
      ,
      children:[
      	{
      		path: 'SearchList/:id',
		      name: 'SearchList',
		      component: SearchList
      	},
      	{
      		path: '',
		      name: 'SearchList',
		      component: SearchList
      	},
      	{
      		path:'SearchNotFound',
      		name:'NotFound',
      		component:NotFound
      	}
      ]
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
   },
   {
      path: '/reg',
      name: 'Reg',
      component: Reg
   },
   {
      path: '/my',
      name: 'My',
      component: My,
      children:[
      	{path:'tabs',name:"Tabs",component:Tabs},
      	{path:'contribute',name:"Contribute",component:Contribute}
      ]
   },
   {
      path: '/SearchList',
      name: 'SearchList',
      component: SearchList
   }
  ]
})
