export function load<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function save<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}
