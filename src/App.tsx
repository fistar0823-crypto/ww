
import { NavLink, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import DataManager from './pages/DataManager'

export default function App(){
  return (
    <div>
      <h1>理財系統</h1>
      <nav className="nav">
        <NavLink to="/" end className={({isActive}) => isActive ? 'btn active':'btn'}>Dashboard</NavLink>
        <NavLink to="/data" className={({isActive}) => isActive ? 'btn active':'btn'}>資料管理</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/data" element={<DataManager/>} />
      </Routes>
    </div>
  )
}
