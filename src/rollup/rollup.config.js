import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import json from '@rollup/plugin-json' //识别
import terser from 'rollup-plugin-terser' //变
export default {
    input: "./index.js",
    output: [{
        file: "dist/bundel.esm.js",
        format: 'cjs',
        plugins: [terser()]
    }, {
        file: 'dist/bundle.cjs.js',
        format: 'cjs'
    }],
    Plugins: [json(), nodeResolve(), commonjs()],
    // 不想打包
    external: ["vue"]

}