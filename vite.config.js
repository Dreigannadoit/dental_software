import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/dental_software/",
  // TODO: REMOVE BEFORE LAUNCH !!!!!!
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
