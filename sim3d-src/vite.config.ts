import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build en mode « bibliothèque » : un point d'entrée ES (sim3d.js) + chunks chargés à la demande.
// Le résultat est copié tel quel dans /sim3d du site statique (aucun build nécessaire côté Vercel).
export default defineConfig({
  plugins: [react()],
  base: './',
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
    lib: { entry: 'src/embed.tsx', formats: ['es'], fileName: () => 'sim3d.js', cssFileName: 'sim3d' },
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks(id: string) {
          if (id.includes('node_modules/three/')) return 'three'
          if (id.includes('node_modules/postprocessing') || id.includes('node_modules/n8ao')) return 'post'
          if (id.includes('node_modules/@react-three') || id.includes('node_modules/react')) return 'r3f'
        },
      },
    },
  },
})
