<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <router-link to="/"> Доходы / расходы</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <plus-circle-outlined />
          <router-link to="/test"> Добавить операцию</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <dollar-outlined />
          <router-link to="/report"> Отчеты</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <dollar-outlined />
          <router-link to="/"> Управление счетами</router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <setting-outlined />
              <span>Настройки</span>
            </span>
          </template>
          <a-menu-item key="5">Управление категориями</a-menu-item>
          <a-menu-item key="6">Форма настроек пользователя</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 16px 16px">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
</script>
<style scoped>
#components-layout-demo-side .logo {
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>