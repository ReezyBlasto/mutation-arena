import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: { "@": path.resolve(__dirname, "./src") },
    },
    server: {
        port: 8921,
        // Proxy /api to the FastAPI backend (matches the existing repo).
        proxy: {
            "/api": { target: "http://localhost:8920", changeOrigin: true },
        },
    },
});
