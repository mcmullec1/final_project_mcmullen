import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base:'https://mcmullec1.github.io/final_project_mcmullen/'
  base:'/final_project_mcmullen/'
})
