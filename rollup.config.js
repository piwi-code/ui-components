import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [typescript()],
    output: [
      {
        file: 'dist/index.js',
        format: 'es',
        banner: '/* eslint-disable */',
      },
      {
        file: 'storybook/src/lib/index.js',
        format: 'es',
        banner: '/* eslint-disable */',
      },
    ],
    external: (id) => /react|@mui|mdi-material-ui|axios|styled-components|date-fns|url/.test(id),
  },
];
