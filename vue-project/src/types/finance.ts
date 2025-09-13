export interface FinanceItem {
  id: string;
  type: 'income' | 'expense';
  title: string;
  category: string;
  amount: number;
  date: Date;
  icon: string;
  status?: 'completed' | 'pending';
}

export interface FinanceState {
  items: FinanceItem[];
}