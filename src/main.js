import { createApp } from 'vue'


import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';

import App from './App.vue'
import router from '@/router'
import store from '@/store'


//  创建并挂载根实例
const app = createApp(App)

app.use(Antd)
app.use(router)
app.use(store)


app.mount('#app')
