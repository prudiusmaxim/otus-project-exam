import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';

import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined
} from '@ant-design/icons-vue';

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.component('PieChartOutlined', PieChartOutlined);
app.component('DesktopOutlined', DesktopOutlined);
app.component('UserOutlined', UserOutlined);
app.component('TeamOutlined', TeamOutlined);
app.component('FileOutlined', FileOutlined);

app.use(Antd);

app.mount('#app')
