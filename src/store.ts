
import { create } from 'zustand'

export type Cashflow = {
  id: string
  date: string
  type: '收入' | '支出'
  amount: number
  note?: string
}

export type State = {
  userId: string
  flows: Cashflow[]
  add: (f: Omit<Cashflow,'id'>) => void
  replaceAll: (flows: Cashflow[]) => void
  reset: () => void
}
const KEY = 'pf-records-v1'

function load(): State {
  const raw = localStorage.getItem(KEY)
  const base = { userId: (window as any).APP_CONFIG?.defaultUserId ?? 'user123', flows: [] as Cashflow[] }
  if (!raw) return { ...base, add(){}, replaceAll(){}, reset(){} }
  try {
    const data = JSON.parse(raw)
    return { ...base, ...data, add(){}, replaceAll(){}, reset(){} }
  } catch { return { ...base, add(){}, replaceAll(){}, reset(){} } }
}

export const useStore = create<State>((set,get) => ({
  ...load(),
  add: (f) => set(s => {
    const item: Cashflow = { id: Math.random().toString(36).slice(2,9), ...f }
    const flows = [item, ...s.flows]
    const next = { ...s, flows }
    localStorage.setItem(KEY, JSON.stringify(next))
    return next
  }),
  replaceAll: (flows) => set(s => {
    const next = { ...s, flows }
    localStorage.setItem(KEY, JSON.stringify(next))
    return next
  }),
  reset: () => set(() => {
    localStorage.removeItem(KEY)
    return load()
  })
}))
