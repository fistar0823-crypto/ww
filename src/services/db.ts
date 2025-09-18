import { DEFAULT_DATA, STORAGE_KEY } from '../constants';
import { FinanceData, Cashflow } from '../types';
import { load, save } from '../utils/storage';

export function getData(): FinanceData {
  const data = load<FinanceData>(STORAGE_KEY);
  if (data) return data;
  save(STORAGE_KEY, DEFAULT_DATA);
  return DEFAULT_DATA;
}

export function setData(data: FinanceData) {
  data.updatedAt = new Date().toISOString();
  save(STORAGE_KEY, data);
}

export function resetData() {
  setData(structuredClone(DEFAULT_DATA));
}

export function addCashflow(tx: Omit<Cashflow, 'id'>) {
  const data = getData();
  const id = crypto.randomUUID();
  data.cashflows.unshift({ ...tx, id });
  setData(data);
  return id;
}

export function removeCashflow(id: string) {
  const data = getData();
  data.cashflows = data.cashflows.filter(t => t.id !== id);
  setData(data);
}

export function setAssets(cash: number, stocks: number) {
  const data = getData();
  data.assets.cash = cash;
  data.assets.stocks = stocks;
  setData(data);
}
