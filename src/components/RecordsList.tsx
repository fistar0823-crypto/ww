
import React, { useEffect, useState } from "react";
import { fetchRecords, RecordLine } from "../services/fetchRecords";

export default function RecordsList() {
  const [items, setItems] = useState<RecordLine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchRecords();
        setItems(data.reverse()); // 讓最新在前面（假設 append 順序）
      } catch {
        setItems([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>讀取中...</div>;

  if (!items.length) return <div>目前尚無資料。</div>;

  return (
    <div style={{marginTop:16}}>
      <h3>Records</h3>
      <table style={{width:'100%', borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <th style={{borderBottom:'1px solid #ddd', textAlign:'left'}}>時間</th>
            <th style={{borderBottom:'1px solid #ddd', textAlign:'left'}}>類別</th>
            <th style={{borderBottom:'1px solid #ddd', textAlign:'right'}}>金額</th>
            <th style={{borderBottom:'1px solid #ddd', textAlign:'left'}}>備註</th>
          </tr>
        </thead>
        <tbody>
          {items.map((r) => (
            <tr key={r.id}>
              <td style={{borderBottom:'1px solid #eee'}}>{new Date(r.timestamp).toLocaleString()}</td>
              <td style={{borderBottom:'1px solid #eee'}}>{r.category}</td>
              <td style={{borderBottom:'1px solid #eee', textAlign:'right'}}>{r.amount}</td>
              <td style={{borderBottom:'1px solid #eee'}}>{r.note || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
