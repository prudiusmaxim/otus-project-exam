<script setup lang="ts">
import ChartIncome from '../charts/ChartIncome.vue';

</script>

<template>
  <a-row>
    <a-card title="Расходы" :bordered="true" style="width: 45%;"> 
      <ChartIncome />    
    </a-card>
    <a-card title="Доходы" :bordered="true" style="width: 45%; margin-left: 30px;">      
    </a-card>
  </a-row>
</template>

<style scoped></style>
