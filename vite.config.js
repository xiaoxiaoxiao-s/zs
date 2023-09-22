import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from "@rollup/plugin-inject";
// import babel from "vite-plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    inject({
      "window.Quill": ["@vueup/vue-quill", "Quill"],
      Quill: ["@vueup/vue-quill", "Quill"],
    }),
  ],
  resolve: {
    extensions: [".vue", ".js"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: { target: "es2015" },
});
