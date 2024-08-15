import 'dotenv/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  define: {
    'process.env.OPENAI_API_KEY': JSON.stringify(process.env.OPENAI_API_KEY),
  }
})
