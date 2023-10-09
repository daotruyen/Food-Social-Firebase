module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        alias: {
          '@navigators': './src/navigators',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@config': './src/config',
          '@assets': './src/assets',
          '@reduxCore': './src/reduxCore',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
