import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import DataManager from './components/DataManager'
import Navbar from './components/Navbar'

export default function App() {
  const [page, setPage] = useState<'dashboard' | 'data'>('dashboard')

  return (
    <div style={{ padding: '20px', fontFamily: 'Microsoft JhengHei, sans-serif' }}>
      <h1>理財系統</h1>
      <Navbar setPage={setPage} />
      {page === 'dashboard' ? <Dashboard /> : <DataManager />}
    </div>
  )
}
