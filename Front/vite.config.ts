import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
      { find: '@widgets', replacement: path.resolve(__dirname, 'src/widgets') },
      { find: '@apps', replacement: path.resolve(__dirname, 'src/apps') },
      { find: '@modules', replacement: path.resolve(__dirname, 'src/modules') }
    ],
  },
  build: {
    chunkSizeWarningLimit: 1000
  }
})
