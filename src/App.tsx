import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import DataManager from './components/DataManager';

type Tab = 'dashboard' | 'manage';

export default function App() {
  const [tab, setTab] = useState<Tab>('dashboard');

  return (
    <>
      <div className="container" style={{ paddingBottom: 0 }}>
        <div className="row">
          <button onClick={() => setTab('dashboard')}>Dashboard</button>
          <button onClick={() => setTab('manage')}>資料管理</button>
        </div>
      </div>

      {tab === 'dashboard' ? <Dashboard /> : <DataManager />}
    </>
  );
}
