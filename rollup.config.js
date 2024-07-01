import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';

//NEW
const packageJson = require('./package.json')

export default [
  {
    input: 'index.js',
    output: [
      {
         file: packageJson.main,
         format: 'es'
      }
   ],
   plugins: [
      external({ includeDependencies: true }),
      resolve(),
      commonjs({
         exclude: [
            'coverage',
            '.storybook',
            'storybook-static',
            'config',
            'dist',
            'node_modules/**',
            '*.cjs',
            '*.mjs',
            '**/__snapshots__/*',
            '**/__tests__',
            '**/*.test.js+(|x)',
            '**/*.test.ts+(|x)',
            '**/*.mdx',
            '**/*.story.ts+(|x)',
            '**/*.story.js+(|x)',
            '**/*.stories.ts+(|x)',
            '**/*.stories.js+(|x)',
            'setupTests.ts',
            'vitest.config.ts',
          ],         
      }),
      babel({ babelHelpers: 'bundled' })
   ]
  },

]