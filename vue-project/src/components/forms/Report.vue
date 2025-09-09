<script setup lang="ts">
</script>

<template>
  <a-row>
    <a-card title="Отчет" :bordered="true" class="card-report">
      <a-collapse>        
        <a-collapse-panel key="1" header="Параметры отчета">          
        </a-collapse-panel>
      </a-collapse>

      <div class="center-container">
        <a-card title="График" :bordered="true" class="card-chart">
          1
          2
          3

        </a-card>
      </div>
    </a-card>
  </a-row>
</template>

<style scoped>
.card-report {
  width: 100%;
}

.card-chart {
  width: 100%;
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 20px;
}
</style>
