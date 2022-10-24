import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript';
import cleaner from 'rollup-plugin-cleaner';

import pkg from './package.json'

const srcConfig = {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        }
    ],
    external: Object.keys(pkg.peerDependencies).concat(Object.keys(pkg.dependencies)),
    plugins: [
        typescript({compilerOptions: {declaration: true, declarationDir: './dist/types'}}),
        babel({
            babelHelpers: 'bundled',
            exclude: ['node_modules/**', 'src/**/*.stories.js', 'src/**/*.stories.ts'],
        }),
        resolve({
            moduleDirectories: ["node_modules"]
        }),
        commonjs(),
        cleaner({ targets: ['./dist/'] })
    ]
}

export default srcConfig;

