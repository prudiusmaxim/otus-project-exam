<script setup lang="ts">
import ChartExpenses from '../charts/ChartExpenses.vue';
import ChartIncome from '../charts/ChartIncome.vue';

</script>

<template>
  <div class="flex-rows">
    <div class="row">
      <a-card title="Расходы за неделю" :bordered="true" style="width: 45%;">
        <chart-income />
      </a-card>
      <a-card title="Доходы за неделю" :bordered="true" style="width: 45%; margin-left: 30px;">
        <chart-expenses />
      </a-card>
    </div>
    <div class="row">
      <a-card title="Детализация" :bordered="true" style="width: 100%;">
        <div class="finance-item income">
          <div class="item-icon">💰</div>
          <div class="item-content">
            <div class="item-title">Зарплата</div>
            <div class="item-category">Работа • ООО "Рога и копыта"</div>
            <div class="item-date">Сегодня, 10:30</div>         
          </div>
          <div class="item-amount">+75 000 ₽</div>          
        </div>

        <div class="finance-item income">
          <div class="item-icon">🎁</div>
          <div class="item-content">
            <div class="item-title">Возврат долга</div>
            <div class="item-category">Личное • От Ивана</div>
            <div class="item-date">Вчера, 18:45</div>
          </div>
          <div class="item-amount">+15 000 ₽</div>          
        </div>
        
        <div class="finance-item expense">
          <div class="item-icon">🛒</div>
          <div class="item-content">
            <div class="item-title">Продукты</div>
            <div class="item-category">Питание • Пятерочка</div>
            <div class="item-date">Сегодня, 09:15</div>
          </div>
          <div class="item-amount">-3 450 ₽</div>          
        </div>

        <div class="finance-item expense">
          <div class="item-icon">🏠</div>
          <div class="item-content">
            <div class="item-title">Аренда квартиры</div>
            <div class="item-category">Жилье • Ноябрь</div>
            <div class="item-date">Завтра</div>
          </div>
          <div class="item-amount">-35 000 ₽</div>          
        </div>

        <div class="finance-item expense">
          <div class="item-icon">⛽</div>
          <div class="item-content">
            <div class="item-title">Заправка авто</div>
            <div class="item-category">Транспорт • Лукойл</div>
            <div class="item-date">2 дня назад</div>
          </div>
          <div class="item-amount">-2 800 ₽</div>          
        </div>

        <div class="finance-item income">
          <div class="item-icon">📈</div>
          <div class="item-content">
            <div class="item-title">Дивиденды</div>
            <div class="item-category">Инвестиции • Сбербанк</div>
            <div class="item-date">5 дней назад</div>
          </div>
          <div class="item-amount">+12 340 ₽</div>    
        </div>
      </a-card>
    </div>
  </div>
</template>

<style scoped>
.flex-rows {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  width: 95%;
}

.finance-item {
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid;
}

.finance-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

/* Стиль для доходов */
.income {
  border-left-color: #52c41a;
  background: linear-gradient(90deg, rgba(82, 196, 26, 0.05) 0%, rgba(255, 255, 255, 1) 30%);
}

/* Стиль для расходов */
.expense {
  border-left-color: #f5222d;
  background: linear-gradient(90deg, rgba(245, 34, 45, 0.05) 0%, rgba(255, 255, 255, 1) 30%);
}

.item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 16px;
  font-size: 20px;
}

.income .item-icon {
  background-color: #f6ffed;
  color: #52c41a;
  border: 1px solid #b7eb8f;
}

.expense .item-icon {
  background-color: #fff2f0;
  color: #f5222d;
  border: 1px solid #ffccc7;
}

.item-content {
  flex: 1;
}

.item-title {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 4px;
  color: #2c3e50;
}

.item-category {
  font-size: 13px;
  color: #8c8c8c;
  margin-bottom: 4px;
}

.item-date {
  font-size: 12px;
  color: #bfbfbf;
}

/* Сумма */
.item-amount {
  font-weight: 600;
  font-size: 18px;
  margin-left: 12px;
}

.income .item-amount {
  color: #52c41a;
}

.expense .item-amount {
  color: #f5222d;
}

</style>
