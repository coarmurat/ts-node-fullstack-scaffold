import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import run from '@rollup/plugin-run';

export default[
    {
        input:'frontend/index.ts',
        plugins: [
            resolve(),
            commonjs(),
            json(),
            terser(),
            typescript({tsconfig:'frontend/tsconfig.json'}),
            alias({
                entries:[
                    { find: 'axios' , replacement:'node_modules/axios/dist/axios.min.js'}
                ]
            })
        ],
        output:{
            file:'frontend/bundle.js',
            format:'iife',
            
        }
    },
    {
        input:'backend/index.ts',
        plugins: [
            resolve(),
            commonjs(),
            json(),
            typescript({tsconfig:'backend/tsconfig.json'}),
            run()
        ],
        output:{
            dir:'backend/dist'
            
        }
    }
]