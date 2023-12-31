import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    globalSetup: "./test/setup-global.ts",
    alias: {
      "@": path.resolve(__dirname, "."),
    },
    coverage: {
      all: true,
      include: ["app/**"],
    },
  },
});
