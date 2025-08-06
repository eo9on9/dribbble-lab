import svgr from '@svgr/rollup'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      dimensions: false,
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        components: path.resolve(__dirname, 'src/components/index.ts'),
        icons: path.resolve(__dirname, 'src/icons/index.ts'),
      },
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
})
