import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';

import pkg from "./package.json" assert { type: 'json' };

export default {
  input: './index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    url(),
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.esm.json',
    }),
    babel({
      babelrc: false,
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: /\**node_modules\**/,
    }),
    commonjs(),
    postcss({
      config: false,
      extensions: ['.css'],
      plugins: [tailwindcss({})],
    }),
  ],
};
