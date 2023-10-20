import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // server:{
  //   proxy:{
  //     '/api':{
  //       target:"http://192.168.20.51:8000",
  //       changeOrigin: true,
  //     }
  //   },
  // },
})
