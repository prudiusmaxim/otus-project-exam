import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { FinanceItem, FinanceState } from '../types/finance';

export const useFinanceStore = defineStore('finance', () => {
  // State
  const items = ref<FinanceItem[]>([]);

  // Getters
  const allItems = computed(() => items.value);
  const incomeItems = computed(() => 
    items.value.filter(item => item.type === 'income')
  );
  const expenseItems = computed(() => 
    items.value.filter(item => item.type === 'expense')
  );
  const totalIncome = computed(() =>
    incomeItems.value.reduce((sum, item) => sum + item.amount, 0)
  );
  const totalExpenses = computed(() =>
    expenseItems.value.reduce((sum, item) => sum + item.amount, 0)
  );
  const balance = computed(() => totalIncome.value - totalExpenses.value);

  // Actions
  const addItem = (item: Omit<FinanceItem, 'id'>) => {
    const newItem: FinanceItem = {
      ...item,
      id: generateId(),
    };
    items.value.push(newItem);
  };

  const addExpense = (item: Omit<FinanceItem, 'id' | 'type'>) => {
    addItem({
      ...item,
      type: 'expense',
    });
  };

  const addIncome = (item: Omit<FinanceItem, 'id' | 'type'>) => {
    addItem({
      ...item,
      type: 'income',
    });
  };

  const removeItem = (id: string) => {
    items.value = items.value.filter(item => item.id !== id);
  };

  const updateItem = (id: string, updates: Partial<FinanceItem>) => {
    const index = items.value.findIndex(item => item.id === id);
    if (index !== -1) {
      items.value[index] = { ...items.value[index], ...updates };
    }
  };

  // Helper function
  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  // Initialize with some demo data
  const initializeDemoData = () => {
    items.value = [
      {
        id: generateId(),
        type: 'income',
        title: 'Зарплата',
        category: 'Работа • ООО "Рога и копыта"',
        amount: 75000,
        date: new Date(),
        icon: '💰',
        status: 'completed'
      },
      {
        id: generateId(),
        type: 'expense',
        title: 'Продукты',
        category: 'Питание • Пятерочка',
        amount: 3450,
        date: new Date(),
        icon: '🛒',
        status: 'completed'
      }
    ];
  };

  return {
    // State
    items,
    
    // Getters
    allItems,
    incomeItems,
    expenseItems,
    totalIncome,
    totalExpenses,
    balance,
    
    // Actions
    addItem,
    addExpense,
    addIncome,
    removeItem,
    updateItem,
    initializeDemoData
  };
});