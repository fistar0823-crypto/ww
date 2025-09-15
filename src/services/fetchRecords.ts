
export type RecordLine = {
  id: string;
  timestamp: string;
  type: string;
  category: string;
  amount: number;
  currency: string;
  note?: string;
  tags?: string[];
  extra?: Record<string, unknown>;
};

// 從同站點讀取 data/records.jsonl，轉成物件陣列
export async function fetchRecords(basePath = ""): Promise<RecordLine[]> {
  // 預設讀取同域的 data/records.jsonl
  const url = (basePath || "") + "data/records.jsonl";
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    // 若檔案尚未產生，直接回傳空陣列
    return [];
  }
  const text = await res.text();
  const lines = text
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean);
  const data: RecordLine[] = [];
  for (const line of lines) {
    try {
      data.push(JSON.parse(line));
    } catch {}
  }
  return data;
}
