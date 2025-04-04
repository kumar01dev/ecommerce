import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This allows access from any device in your local network
    port: 5173,        // Ensure this matches the port you're running Vite on
  },
})
