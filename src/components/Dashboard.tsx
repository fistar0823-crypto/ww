import React from 'react';
import { getData } from '../services/db';

export default function Dashboard() {
  const data = getData();

  return (
    <div className="container">
      <h1>理財系統</h1>
      <h2>Dashboard</h2>
      <p className="muted">使用者 ID: {data.userId}</p>

      <h3>資產帳戶</h3>
      <ul>
        <li>現金: {data.assets.cash.toLocaleString()} 元</li>
        <li>股票: {data.assets.stocks.toLocaleString()} 元</li>
      </ul>

      <h3>現金流紀錄</h3>
      <div className="card">
        {data.cashflows.length === 0 && <p className="muted">尚無資料</p>}
        <ul>
          {data.cashflows.map(tx => (
            <li key={tx.id}>
              {tx.date} - {tx.type === 'income' ? '收入' : '支出'}: {tx.amount.toLocaleString()} 元
              {tx.note ? `（${tx.note}）` : ''}
            </li>
          ))}
        </ul>
      </div>

      <p className="muted">最後更新：{new Date(data.updatedAt).toLocaleString()}</p>
    </div>
  );
}
