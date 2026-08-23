import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: { port: 5173 },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          guide: ['./src/designSystemThinking.ts', './src/decisionGuide.ts', './src/dataVizBestPractices.ts'],
          catalogue: ['./src/books.ts', './src/dictionary.ts', './src/curations.ts', './src/editorial.ts'],
          studio: ['./src/atelier.ts'],
          research: ['./src/research/compositeLibrary.ts'],
          curation: ['./src/applicationGuides.ts', './src/materials.ts', './src/provenance.ts']
        }
      }
    }
  }
})
