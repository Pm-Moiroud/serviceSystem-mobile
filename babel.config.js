module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~assets/*': './src/assets',
            '~components/*': './src/components',
            '~config': './src/config',
            '~contexts': './src/contexts',
            '~hooks': './src/hooks',
            '~interfaces': './src/interfaces',
            '~layouts': './src/layouts',
            '~router': './src/router',
            '~screens': './src/screens',
            '~styles': './src/styles',
            '~store': './src/store',
            '~utils': './src/utils',
          },
        },
      ],
    ],
  };
};
