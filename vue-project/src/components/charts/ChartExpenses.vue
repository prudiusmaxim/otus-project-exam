<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { ApexOptions } from 'apexcharts';

interface SeriesData {
  name: string;
  data: number[];
}

const series = ref<SeriesData[]>([{
  name: 'Доходы',
  data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
}]);

const chartOptions = reactive<ApexOptions>({
  chart: {
    id: 'basic-chart',
    toolbar: { 
      show: true 
    },
    type: 'line'
  },
  xaxis: {
    categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09']
  },
  colors: ['#14b557'],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 4
  }
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