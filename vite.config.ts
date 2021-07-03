/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig, loadEnv, UserConfigExport } from 'vite'
const envDir = './config'

export default ({ mode }): UserConfigExport => {
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    envDir,
    build: {
      outDir: loadEnv(mode, envDir).VITE_OUT_DIR
    }
  })
}
