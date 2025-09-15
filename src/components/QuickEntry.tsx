
import React, { useState } from "react";
import { submitRecord } from "../services/submitRecord";

export default function QuickEntry() {
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("General");
  const [note, setNote] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    const payload = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      type: "expense" as const,
      category,
      amount: Number(amount),
      currency: "TWD",
      note,
      tags: []
    };
    try {
      const res = await submitRecord(payload);
      if (res.ok) {
        setMsg("✅ 已送出（會建立 Issue，稍後自動寫入 data/records.jsonl）");
        setAmount(0); setCategory("General"); setNote("");
      } else {
        const t = await res.text();
        setMsg(`❌ 送出失敗：${res.status} ${t}`);
      }
    } catch (err: any) {
      setMsg(`❌ 送出異常：${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{border:'1px solid #ddd', padding:12, borderRadius:12, margin:'12px 0'}}>
      <h3>Quick Entry（寫入 GitHub）</h3>
      <form onSubmit={onSubmit}>
        <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          <input type="number" step="0.01" value={amount} onChange={e=>setAmount(Number(e.target.value))} placeholder="金額" required/>
          <input type="text" value={category} onChange={e=>setCategory(e.target.value)} placeholder="類別"/>
          <input type="text" value={note} onChange={e=>setNote(e.target.value)} placeholder="備註（可留空）"/>
          <button type="submit" disabled={loading}>{loading? "送出中..." : "送出"}</button>
        </div>
      </form>
      <div style={{marginTop:8, fontSize:14}}>{msg}</div>
    </div>
  );
}
