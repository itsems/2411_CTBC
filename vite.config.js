import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

const generalConfig = {
  plugins: [
    vue(),
    vueJsx(),
    Components(),
    AutoImport({
      include: [
         /\.[tj]sx?$/,
         /\.vue$/, /\.vue\?vue/,
      ],
      imports: [
         'vue',
         'vue-router',
         'pinia',
         { '@/stores/resolution': ['useSystemStore'] },
         { '@/stores/status': ['useStatusStore'] },
      ],
      dirs: [
        './src/composables/**',
      ],
      eslintrc: {
        enabled: true,
      },
   }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/abstracts/_variables.scss"; @import "@/assets/scss/utilities/_mixins.scss";`
      }
    },
    sourceMap: true,
    devSourcemap: true,
  },
  define: {
    // enable hydration mismatch details in production build
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      ...generalConfig,
      base: '/'
    }
  } else {
    // command === 'build'
    return {
      ...generalConfig,
      base: '/ems/20230728_ctbcinvestment/'
    }
  }
})