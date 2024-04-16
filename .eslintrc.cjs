module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'indent': ['error', 2],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
