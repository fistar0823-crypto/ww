export type TxType = 'income' | 'expense';

export interface Cashflow {
  id: string;
  date: string;   // YYYY-MM-DD
  type: TxType;   // 收入/支出
  note: string;
  amount: number; // >0
}

export interface Assets {
  cash: number;
  stocks: number;
}

export interface FinanceData {
  userId: string;
  assets: Assets;
  cashflows: Cashflow[];
  updatedAt: string; // ISO
}
