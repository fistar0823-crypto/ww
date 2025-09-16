import React from 'react'
import QuickEntry from './QuickEntry'
import RecordsList from './RecordsList'

export default function Dashboard() {
  const userId = 'user123'
  const assets = { cash: 50000, stock: 200000 }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>使用者 ID: {userId}</p>

      <h3>資產帳戶</h3>
      <ul>
        <li>現金: {assets.cash} 元</li>
        <li>股票: {assets.stock} 元</li>
      </ul>

      <h3>現金流紀錄</h3>
      <RecordsList />

      <QuickEntry />
    </div>
  )
}
