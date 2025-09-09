<script setup lang="ts">
import ChartExpenses from '../charts/ChartExpenses.vue';
import ChartIncome from '../charts/ChartIncome.vue';

</script>

<template>
  <a-row>
    <a-card title="Расходы за неделю" :bordered="true" style="width: 45%;">
      <chart-income />
    </a-card>
    <a-card title="Доходы за неделю" :bordered="true" style="width: 45%; margin-left: 30px;">
      <chart-expenses />
    </a-card>
  </a-row>
</template>

<style scoped></style>
