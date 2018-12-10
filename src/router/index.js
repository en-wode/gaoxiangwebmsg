import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login/Loginmid';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/Showpage',
            name: 'Showpage',
            component: resolve => require(['../components/common/Showpage.vue'], resolve)
        },
        {
            path: '/index/home',
            name: '首页',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/index/home',
                    name: '首页',
                    component: resolve => require(['../components/Home/home.vue'], resolve)
                },
                {
                    path: '/Devicestatus',
                    name: '设备状态',
                    component: resolve => require(['../components/devicestatus/Devicestatus.vue'], resolve)
                },
                {
                    path: '/history/:id',
                    name: '历史记录',
                    component: resolve => require(['../components/history/history.vue'], resolve)
                },
                {
                    path: '/Enterprise',
                    name: '企业信息',
                    component: resolve => require(['../components/Enterprise/Enterpriseinfo.vue'], resolve)
                }
            ]
        },
        {
            path: '/new/home',
            name: '信息功能',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/personfunc/message',
                    name: '消息',
                    component: resolve => require(['../components/personfunc/message.vue'], resolve)
                },
                {
                    path: '/personfunc/notice',
                    name: '通知',
                    component: resolve => require(['../components/personfunc/notice.vue'], resolve)
                },
                {
                    path: '/personfunc/todo',
                    name: '待办',
                    component: resolve => require(['../components/personfunc/todo.vue'], resolve)
                },
                {
                    path: '/personfunc/memo',
                    name: '备忘录',
                    component: resolve => require(['../components/personfunc/memo.vue'], resolve)
                }
            ]
        },
    ]
});
