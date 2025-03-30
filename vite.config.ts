/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/setup.ts',
        '**/*.d.ts',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.config.{js,ts}',
      ],
      include: [
        'src/**/*.{js,jsx,ts,tsx}',
      ],
    },
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    reporters: ['default', ['vitest-sonar-reporter', {
      outputFile: './test-report.xml',
      outputDirectory: './',
      reportName: 'test-report.xml'
    }]]
  },
})
