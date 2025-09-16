
export async function saveToCloud(record: any) {
  const endpoint = (window as any).APP_CONFIG?.saveEndpoint || ''
  if (!endpoint) throw new Error('尚未設定 saveEndpoint（public/config.js）')
  const resp = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(record)
  })
  if (!resp.ok) {
    const t = await resp.text().catch(()=> '')
    throw new Error(`雲端儲存失敗: ${resp.status} ${t}`)
  }
  return await resp.json().catch(()=> ({}))
}
