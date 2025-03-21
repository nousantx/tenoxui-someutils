import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import fs from 'node:fs'
import path from 'node:path'

const packageJson = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf-8'))

const name = '__nsx_someutils'
const banner = `/*!
 * ${packageJson.name} v${packageJson.version} | ${packageJson.license} License
 *
 * Copyright (c) 2024-present NOuSantx <nousantx@gmail.com>
 *
 * Built Date: ${new Date().toString()}
 */`
const sourcemap = true
const config = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      sourcemap,
      format: 'cjs',
      exports: 'named',

      banner
    },
    {
      file: 'dist/index.min.cjs',
      sourcemap,
      format: 'cjs',
      exports: 'named',
      banner,

      plugins: [terser()]
    },
    {
      file: 'dist/index.umd.js',
      sourcemap,
      format: 'umd',
      name,
      banner,

      exports: 'named'
    },
    {
      file: 'dist/index.umd.min.js',
      sourcemap,
      format: 'umd',
      name,
      banner,

      exports: 'named',
      plugins: [terser()]
    },
    {
      file: 'dist/index.esm.js',
      sourcemap,
      format: 'es',
      banner
    },
    {
      file: 'dist/index.esm.min.js',
      sourcemap,
      format: 'es',
      banner,

      plugins: [terser()]
    }
  ],
  plugins: [typescript(), resolve(), commonjs()]
}

export default config
