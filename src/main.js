import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routers'  
import Component from './components'  // 全局组件
import '!style-loader!css-loader!less-loader!normalize.css'    // normalize重置浏览器样式
import '!style-loader!css-loader!less-loader!./assets/styles/theme/theme.less' // 引入主题样式
import '!style-loader!css-loader!less-loader!./assets/fonts/iconfont.css'   // 引入字体样式   // 引入字体样式
import '!style-loader!css-loader!less-loader!./assets/styles/common.less' // 引入公共样式

Vue.use(VueRouter)
Vue.use(Component)
// 路由实例
const router = new VueRouter({
    mode: 'history', // hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。history: 依赖 HTML5 History API 和服务器配置。
    scrollBehavior(to, from, savePosition) {   // 前进或后退,滚动到原来的位置
        if (savePosition) {
            return savePosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes: [
        ...routes,
    ],
})

router.beforeEach((to, from, next) => {
	if (to.fullPath === '/') {
        next('/home')
    }else {
        next()
    }
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
