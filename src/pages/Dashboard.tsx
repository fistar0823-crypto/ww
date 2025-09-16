
import { useState } from 'react'
import { useStore } from '../store'
import { saveToCloud } from '../services/save'

export default function Dashboard(){
  const { userId, flows, add } = useStore()
  const [amount, setAmount] = useState<number>(0)
  const [type, setType] = useState<'收入'|'支出'>('收入')
  const [note, setNote] = useState('')
  const [status, setStatus] = useState<string>('')

  async function quickAdd(){
    if (!amount) return
    const rec = { date: new Date().toISOString().slice(0,10), type, amount, note }
    add(rec)
    setAmount(0); setNote('')
    try {
      const r = await saveToCloud(rec)
      setStatus('已寫入 GitHub（或你的雲端）')
    } catch (e:any) {
      setStatus(e?.message || '已存本機（未設定雲端）')
    }
  }

  return (
    <div>
      <div className="card">
        <h3>快速輸入</h3>
        <div className="row">
          <input type="number" value={amount || ''} onChange={e=>setAmount(Number(e.target.value||0))} placeholder="金額" />
          <select value={type} onChange={e=>setType(e.target.value as any)}>
            <option value="收入">收入</option>
            <option value="支出">支出</option>
          </select>
          <input value={note} onChange={e=>setNote(e.target.value)} placeholder="備註（可空白）" />
          <button className="btn" onClick={quickAdd}>新增並儲存</button>
        </div>
        <p className="muted">{status}</p>
      </div>

      <div className="card">
        <h3>現金流紀錄</h3>
        {flows.length===0 ? <p className="muted">尚無紀錄</p> :
          <table>
            <thead><tr><th>日期</th><th>類型</th><th>金額</th><th>備註</th></tr></thead>
            <tbody>
              {flows.map(f=> (
                <tr key={f.id}>
                  <td>{f.date}</td>
                  <td>{f.type}</td>
                  <td>{f.amount.toLocaleString()}</td>
                  <td>{f.note || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}
