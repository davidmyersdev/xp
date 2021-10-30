import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'xp',
      fileName: (format) => `xp.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      output: [{
        esModule: true,
        exports: 'named',
        format: 'es',
      }, {
        format: 'umd',
        inlineDynamicImports: true,
        interop: 'esModule',
        exports: 'named',
      }]
    }
  },
})
