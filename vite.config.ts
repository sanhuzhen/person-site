import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, existsSync, mkdirSync } from 'fs'

// 自定义插件：复制 config.json 到构建目录
function copyConfigPlugin() {
  return {
    name: 'copy-config',
    closeBundle: async () => {
      const configPath = resolve(__dirname, 'config.json')
      const distDir = resolve(__dirname, 'dist')
      const distConfigPath = resolve(distDir, 'config.json')

      if (existsSync(configPath)) {
        if (!existsSync(distDir)) {
          mkdirSync(distDir, { recursive: true })
        }
        copyFileSync(configPath, distConfigPath)
        console.log('✓ config.json 已复制到 dist 目录')
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyConfigPlugin()],
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})
