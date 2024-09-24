import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'
import * as path from "path";
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            formats: ['es'],
            fileName: "index"
        },
        rollupOptions: {
            external: Object.keys(pkg.peerDependencies)
        }
    },
    plugins: [
        dts(),
        react({
            jsxImportSource: "@emotion/react",
            babel: {
                plugins: [
                    [
                        "@emotion/babel-plugin",
                        {
                            "sourceMap": true,
                            "autoLabel": "dev-only",
                            "labelFormat": "[local]",
                            "cssPropOptimization": true
                        }
                    ]
                ],
            },
        })],
})
