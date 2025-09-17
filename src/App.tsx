import React, { useState } from 'react';

function App() {
  const [cash, setCash] = useState(50000);
  const [stocks, setStocks] = useState(200000);
  const [records, setRecords] = useState([
    { date: '2025-09-01', type: '收入', amount: 30000 },
    { date: '2025-09-10', type: '支出', amount: 8000 }
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>理財系統</h1>
      <h2>Dashboard</h2>
      <p>使用者 ID: user123</p>
      <h3>資產帳戶</h3>
      <ul>
        <li>現金: {cash} 元</li>
        <li>股票: {stocks} 元</li>
      </ul>
      <h3>現金流紀錄</h3>
      <ul>
        {records.map((r, i) => (
          <li key={i}>{r.date} - {r.type}: {r.amount} 元</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
