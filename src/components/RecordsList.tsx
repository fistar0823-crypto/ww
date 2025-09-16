import React, { useEffect, useState } from 'react'
import { loadRecords, Record } from '../services/storage'

export default function RecordsList() {
  const [records, setRecords] = useState<Record[]>([])

  useEffect(() => {
    setRecords(loadRecords())
  }, [])

  return (
    <ul>
      {records.map((r, idx) => (
        <li key={idx}>
          {r.date} - {r.type}: {r.amount} 元
        </li>
      ))}
    </ul>
  )
}
