import React, { useMemo, useState } from 'react';
import { addCashflow, getData, removeCashflow, resetData, setAssets } from '../services/db';
import type { TxType } from '../types';

export default function DataManager() {
  const [version, setVersion] = useState(0); // 讓畫面在寫入後重繪
  const data = useMemo(() => getData(), [version]);

  const [date, setDate]     = useState<string>(new Date().toISOString().slice(0,10));
  const [type, setType]     = useState<TxType>('income');
  const [note, setNote]     = useState<string>('');
  const [amount, setAmount] = useState<number>(1000);

  const [cash, setCash]       = useState<number>(data.assets.cash);
  const [stocks, setStocks]   = useState<number>(data.assets.stocks);

  function refresh() { setVersion(v => v + 1); }

  function onAddTx() {
    if (amount <= 0) return alert('金額需 > 0');
    addCashflow({ date, type, note, amount });
    refresh();
  }

  function onSaveAssets() {
    if (cash < 0 || stocks < 0) return alert('金額不可為負');
    setAssets(cash, stocks);
    refresh();
  }

  function onRemoveTx(id: string) {
    if (!confirm('確定刪除此筆紀錄？')) return;
    removeCashflow(id);
    refresh();
  }

  function onReset() {
    if (!confirm('確定重置為預設資料？(不可復原)')) return;
    resetData();
    setCash(getData().assets.cash);
    setStocks(getData().assets.stocks);
    refresh();
  }

  return (
    <div className="container">
      <h1>理財系統</h1>
      <h2>資料管理</h2>

      <div className="card">
        <h3>新增現金流紀錄</h3>
        <div className="row">
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          <select value={type} onChange={e => setType(e.target.value as TxType)}>
            <option value="income">收入</option>
            <option value="expense">支出</option>
          </select>
          <input placeholder="備註 (選填)" value={note} onChange={e => setNote(e.target.value)} />
          <input
            type="number"
            min={1}
            step={1}
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            style={{ width: 120 }}
          />
          <button onClick={onAddTx}>新增</button>
        </div>
      </div>

      <div className="card">
        <h3>資產調整</h3>
        <div className="row">
          <label>現金</label>
          <input type="number" min={0} value={cash} onChange={e => setCash(Number(e.target.value))} />
          <label>股票</label>
          <input type="number" min={0} value={stocks} onChange={e => setStocks(Number(e.target.value))} />
          <button onClick={onSaveAssets}>儲存資產</button>
        </div>
      </div>

      <div className="card">
        <h3>紀錄列表</h3>
        {data.cashflows.length === 0 && <p className="muted">尚無資料</p>}
        <ul>
          {data.cashflows.map(tx => (
            <li key={tx.id} className="spread">
              <span>
                {tx.date} - {tx.type === 'income' ? '收入' : '支出'}: {tx.amount.toLocaleString()} 元
                {tx.note ? `（${tx.note}）` : ''}
              </span>
              <button onClick={() => onRemoveTx(tx.id)}>刪除</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="row">
        <button onClick={onReset}>重置成預設資料</button>
      </div>
    </div>
  );
}
