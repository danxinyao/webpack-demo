//import Home from '../views/home/index.vue'
import Home from 'views/home/index.vue'
import List from 'views/list/index.vue'
import Detail from 'views/detail/index.vue'

var routes = [
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/list',
      name: '首页',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
]
export default routes
