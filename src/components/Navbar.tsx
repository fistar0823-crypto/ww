import React from 'react'

export default function Navbar({ setPage }: { setPage: (page: 'dashboard' | 'data') => void }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => setPage('dashboard')}>Dashboard</button>
      <button onClick={() => setPage('data')}>資料管理</button>
    </div>
  )
}
