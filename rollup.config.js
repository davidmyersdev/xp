import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'auto',
    },
    {
      dir: 'dist/es',
      format: 'es',
    },
    {
      dir: 'dist/iife',
      format: 'iife',
      globals: {},
      name: 'RollupTypeScriptBabel',
    }
  ],
  plugins: [
    resolve({ extensions: ['.ts'] }),
    commonjs(),
    json(),
    babel({ extensions: ['.ts'], babelHelpers: 'runtime' }),
  ],
}
