import typescript from 'rollup-plugin-typescript2';

const defaults = {
  graphql: false
}

export function generateBaseConfig(pkg, { graphql } = defaults) {
  const mainEntrypoint = {
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
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      typescript({
        // eslint-disable-next-line global-require
        typescript: require('typescript')
      })
    ]
  };

  const serverEntrypoint = {
    input: 'src/index.server.ts',
    output: [
      {
        file: pkg.server,
        format: 'cjs',
        sourcemap: true
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      typescript({
        // eslint-disable-next-line global-require
        typescript: require('typescript')
      })
    ]
  };

  if (pkg.server) {
    return [mainEntrypoint, serverEntrypoint]
  }


  return mainEntrypoint;
}
