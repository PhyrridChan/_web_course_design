import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import Antd from 'ant-design-vue';

import less from 'less';

import 'ant-design-vue/dist/antd.css';
import '@/assets/css/overwrite.css';
import 'wow.js/css/libs/animate.css'



createApp(App).use(less).use(Antd).use(router).mount('#app')
