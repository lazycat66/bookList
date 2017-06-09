
import Vue from 'vue';
import App from './App.vue';
import Login from './components/login.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter()

// 路由map
router.map({
    '/': { component: Home },
    '/login': { component: Login},
    '/register': { component: Register}
})
router.redirect({ '*': '/' })
router.start(App, '#app')
