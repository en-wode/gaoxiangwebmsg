// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import './assets/css/elemindex.css'; // 主题样式
import './assets/css/theme.css'; // 主题颜色样式
import './assets/css/allbasis.css'; // 基础样式
import './assets/css/index.css'; // 主题颜色样式
import './assets/css/icon.css'; // 字体图标
import ElementUI from 'element-ui';
import store from '@/store/index';
import '../static/css/ele-black/index.css'; // 黑色色主题
// 引入echarts
import echarts from 'echarts';
//
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
/* eslint-disable no-new */
Vue.use(ElementUI);

Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
