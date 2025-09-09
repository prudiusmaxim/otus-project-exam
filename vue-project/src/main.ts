import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import VueApexCharts from "vue3-apexcharts";

import {
  PlusCircleOutlined,
  DollarOutlined,
  PieChartOutlined,
  SettingOutlined
} from '@ant-design/icons-vue';

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(Antd);

app.component('ApexChart', VueApexCharts)

app.component('PieChartOutlined', PieChartOutlined);
app.component('PlusCircleOutlined', PlusCircleOutlined);
app.component('DollarOutlined', DollarOutlined);
app.component('SettingOutlined', SettingOutlined);

app.mount('#app')
