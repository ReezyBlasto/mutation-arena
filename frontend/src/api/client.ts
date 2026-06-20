// client.ts — tiny typed fetch + SSE wrapper.
const BASE = "";

async function handle<T>(r: Response): Promise<T> {
  if (!r.ok) throw new Error(`${r.status} ${await r.text()}`);
  return r.json() as Promise<T>;
}

export function get<T>(path: string, signal?: AbortSignal): Promise<T> {
  return fetch(`${BASE}${path}`, { signal }).then(handle<T>);
}

export function post<T>(path: string, body?: unknown): Promise<T> {
  return fetch(`${BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body == null ? undefined : JSON.stringify(body),
  }).then(handle<T>);
}

export function stream(path: string, onMessage: (data: any) => void, onError?: (e: Event) => void): () => void {
  const es = new EventSource(`${BASE}${path}`);
  es.onmessage = (e) => { try { onMessage(JSON.parse(e.data)); } catch { onMessage(e.data); } };
  if (onError) es.onerror = onError;
  return () => es.close();
}
