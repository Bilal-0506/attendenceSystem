module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ['react-native-worklets-core/plugin'],
    ['@babel/plugin-transform-class-properties', { loose: true }], // Set loose mode to true
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
    ['react-native-reanimated/plugin'],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
