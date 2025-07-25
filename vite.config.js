import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import tailwindConfig from "./tailwind.config"

export default defineConfig({
  plugins: [react(),tailwindConfig],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

