import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Критически важно для GitHub Pages!
  build: {
    outDir: 'docs', // Папка для сборки
    emptyOutDir: true // Очищать папку при сборке
  }
})