import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import replace from 'rollup-plugin-replace'
import copy from 'rollup-plugin-copy'

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
    external: Object.keys({ ...pkg.peerDependencies, ...pkg.dependencies }),
    plugins: [
        babel({
            exclude: 'node_modules/**',
            ...pkg.babelOptions
        }),
        resolve(),
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
            targets: { 'example/index.html': 'example/dist/index.html' },
        }),
        babel({
            exclude: 'node_modules/**',
            ...pkg.babelOptions
        }),
        resolve(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        commonjs({
            namedExports: {
                'react': Object.getOwnPropertyNames(require('react'))                
            }
        }),

        process.env.RUN_EXAMPLE
        &&
        serve({
            historyApiFallback: true,
            contentBase: 'example/dist',
            host: '0.0.0.0',
            port: 8080,            
            headers: {
                'Cache-Control': 'no-cache'
            }
        })

    ],
    watch: {
        chokidar: true
    }
}

export default (process.env.RUN_EXAMPLE ? exampleConfig : srcConfig)

