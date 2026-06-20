import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

function backendTarget(): string {
  const envPort = process.env.MA_BACKEND_PORT;
  if (envPort) return `http://localhost:${envPort}`;
  try {
    const raw = fs.readFileSync(path.resolve(__dirname, "../.runtime/backend.json"), "utf8");
    const { host, port } = JSON.parse(raw);
    if (port) return `http://${host || "localhost"}:${port}`;
  } catch {}
  return "http://localhost:8920";
}

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  server: {
    port: 8921,
    strictPort: false,
    proxy: { "/api": { target: backendTarget(), changeOrigin: true } },
  },
});
