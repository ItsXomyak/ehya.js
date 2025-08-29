import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: ["*"], // или твой ngrok-домен
    host: true, // важно, чтобы принимал внешние запросы
  },
});
