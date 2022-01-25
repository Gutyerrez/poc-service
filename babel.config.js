module.exports = {
  presets: [
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          Cache: './src/cache/*',
          Exceptions: './src/exceptions/*',
          Contracts: './src/contracts/*',
          Misc: './src/misc/*',
          Storage: './src/storage/*',
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata',
  ],
};
