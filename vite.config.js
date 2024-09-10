import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

export default () => {
  return {
    base: '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
    ],
  }
}
