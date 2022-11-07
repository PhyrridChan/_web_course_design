import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import Antd from 'ant-design-vue';
import axios from "axios";
import less from 'less';
import not_finish from "@/assets/js/not_finish";

import 'ant-design-vue/dist/antd.css';
import '@/assets/css/overwrite.css';
import 'wow.js/css/libs/animate.css'


const app = createApp(App).use(less).use(Antd).use(router)
app.config.globalProperties.$nf = not_finish // 自定义添加

app.mount('#app')