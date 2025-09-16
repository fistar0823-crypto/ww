
import { useRef, useState } from 'react'
import { useStore } from '../store'

export default function DataManager(){
  const { replaceAll, reset } = useStore()
  const ref = useRef<HTMLTextAreaElement>(null)
  const [exported, setExported] = useState('')

  function onExport(){
    const raw = localStorage.getItem('pf-records-v1') || ''
    setExported(raw)
    if (ref.current) ref.current.value = raw
  }
  function onImport(){
    try {
      const json = JSON.parse(ref.current?.value || '')
      if (!json || typeof json !== 'object') throw new Error('格式錯誤')
      const flows = Array.isArray(json.flows) ? json.flows : []
      replaceAll(flows)
      alert('已匯入（並儲存到 localStorage）')
    } catch (e){
      alert('JSON 解析失敗')
    }
  }

  return (
    <div>
      <div className="card">
        <h3>匯出</h3>
        <button className="btn" onClick={onExport}>匯出目前資料</button>
        <textarea ref={ref} defaultValue={exported}></textarea>
      </div>
      <div className="card">
        <h3>匯入 / 重設</h3>
        <button className="btn" onClick={onImport}>從上方 JSON 匯入</button>
        <button className="btn" style={{marginLeft:8}} onClick={reset}>重設預設資料</button>
      </div>
    </div>
  )
}
