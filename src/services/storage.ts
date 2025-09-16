export type Record = {
  date: string
  type: '收入' | '支出'
  amount: number
}

const STORAGE_KEY = 'records'

export function loadRecords(): Record[] {
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : []
}

export function saveRecord(record: Record) {
  const records = loadRecords()
  records.push(record)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}
