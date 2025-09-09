<script setup lang="ts">
import { ref, reactive } from 'vue';

// Реактивные данные графика
const series = ref([{
  name: 'Продажи',
  data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
}]);

// Реактивные опции графика
const chartOptions = reactive({
  chart: {
    id: 'basic-chart',
    toolbar: { show: true }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  },
  colors: ['#008FFB']
});
</script>

<template>
    <ApexChart
      type="line"
      :options="chartOptions"
      :series="series"
      height="350"
    />
</template>