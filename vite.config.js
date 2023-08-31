import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Reemplaza "subcarpeta" con la ruta base adecuada
  plugins: [react()],
  build: {
    outDir: "dist", // Carpeta de implementación, asegúrate de que coincida con lo que configuraste en Netlify
  },
})
