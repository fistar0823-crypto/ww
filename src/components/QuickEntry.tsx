import React, { useState } from 'react'
import { saveRecord } from '../services/storage'

export default function QuickEntry() {
  const [amount, setAmount] = useState('')
  const [type, setType] = useState<'收入' | '支出'>('收入')

  const addRecord = () => {
    if (!amount) return
    saveRecord({ date: new Date().toISOString().slice(0, 10), type, amount: Number(amount) })
    setAmount('')
    alert('已新增紀錄！')
  }

  return (
    <div>
      <h3>快速輸入</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="金額"
      />
      <select value={type} onChange={(e) => setType(e.target.value as '收入' | '支出')}>
        <option value="收入">收入</option>
        <option value="支出">支出</option>
      </select>
      <button onClick={addRecord}>新增</button>
    </div>
  )
}
