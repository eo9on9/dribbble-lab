import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config.mts'

export default defineConfig({
  ...viteConfig,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.tsx',
  },
})
