
export type RecordPayload = {
  id: string;
  timestamp: string;
  type: "expense" | "income" | "transfer";
  category: string;
  amount: number;
  currency: string;
  note?: string;
  tags?: string[];
  extra?: Record<string, unknown>;
};

declare global { interface Window { ISSUE_TOKEN?: string } }

const OWNER = "fistar0823-crypto";
const REPO  = "ww";

export async function submitRecord(payload: RecordPayload): Promise<Response> {
  const token = window.ISSUE_TOKEN;
  if (!token) throw new Error("缺少 ISSUE_TOKEN，請在 public/config.js 填入 Fine-grained Token（Issues: write）。");
  return fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
    method: "POST",
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: `Record ${payload.id}`,
      body: JSON.stringify(payload, null, 0)
    })
  });
}
