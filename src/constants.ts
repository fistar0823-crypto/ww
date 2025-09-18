import { FinanceData } from './types';

export const DEFAULT_DATA: FinanceData = {
  userId: 'user123',
  assets: { cash: 50000, stocks: 200000 },
  cashflows: [
    { id: 't1', date: '2025-09-01', type: 'income',  note: '薪資', amount: 30000 },
    { id: 't2', date: '2025-09-10', type: 'expense', note: '房租', amount: 8000  },
  ],
  updatedAt: new Date().toISOString(),
};

export const STORAGE_KEY = 'pf_nav_v1';
