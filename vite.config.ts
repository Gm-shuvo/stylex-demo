import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-expect-error babel config is not typed
import babelConfig from './babel.config.cjs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: babelConfig
  })],
})
