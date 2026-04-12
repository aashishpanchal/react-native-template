const reactNativeConfig = require('@react-native/eslint-config/flat');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...reactNativeConfig,
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'ft-flow/define-flow-type': 'off',
      'ft-flow/use-flow-type': 'off',
    },
  },
];
