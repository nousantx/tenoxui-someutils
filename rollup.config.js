import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import fs from 'node:fs'
import path from 'node:path'

const packageJson = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf-8'))

const name = 'someutils'
const banner = `/*!
 * ${packageJson.name} v${packageJson.version} | Licensed under the table.
 *
 * NOuSantx do that? ¯\\_(ツ)_/¯
 */`


const config = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'named',

      banner,
      
    },
    {
      file: 'dist/index.min.cjs',
      format: 'cjs',
      exports: 'named',
      banner,
      
      plugins: [terser()]
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name,
      banner,
      
      exports: 'named'
    },
    {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name,
      banner,
      
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      banner,
      
    },
    {
      file: 'dist/index.esm.min.js',
      format: 'es',
      banner,
      
      plugins: [terser()]
    }
  ],
  plugins: [typescript(), resolve(), commonjs()]
}

export default config
