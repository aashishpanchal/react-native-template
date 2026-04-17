module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // React Compiler
    ['babel-plugin-react-compiler'],
    // Module-alise
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ts', '.json', '.jsx', '.tsx'],
        alias: {
          '#': ['./src'],
          '#assets': ['./assets'],
          '#types': ['./types'],
        },
      },
    ],
  ],
};
