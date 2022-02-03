import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import dev from 'rollup-plugin-dev'
import replace from '@rollup/plugin-replace'
import copy from '@guanghechen/rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json'

const srcConfig = {
    input: 'src/index.js',
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
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            ...pkg.babelOptions
        }),
        resolve({            
            moduleDirectories: ["node_modules"]
          }),
        commonjs()
    ]
}

const exampleConfig = {
    input: 'example/index.js',
    output: {
        file: 'example/dist/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        copy({
            targets: [{ src: 'example/index.html', dest: 'example/dist' }],
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            ...pkg.babelOptions
        }),
        resolve(),
        replace({
            preventAssignment: true,
            values: {
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        commonjs(),
        postcss(),

        process.env.RUN_EXAMPLE
        &&
        dev({
            //historyApiFallback: true,
            spa: true,
            basePath: "/",
            dirs: ['example/dist'],
            host: '0.0.0.0',
            port: 5000,
            /*headers: {
                'Cache-Control': 'no-cache'
            }*/
        })

    ],
    watch: {
        chokidar: true
    }
}

export default (process.env.RUN_EXAMPLE ? exampleConfig : srcConfig)

