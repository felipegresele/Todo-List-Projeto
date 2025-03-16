import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, //Para não precisar ficar importando de funções de teste e entender como algo global para todos
    setupFiles: './setupVitest.ts'
  }
})
