// Plugins
// import jest from "eslint-plugin-jest";
// import prettier from "eslint-plugin-prettier";
const react = require('eslint-plugin-react');

// Configs
// import prettierConfig from "eslint-config-prettier";
const reactConfig = require("eslint-plugin-react/configs/recommended");

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ignores: [
      '.next',
      'public/',
    ],
    plugins: {
      // jest,
      // prettier,
      react,
    },
    // prettierConfig,
    reactConfig,
    // rules: {
    //   'indent': ['error', 2],
    //   'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // },
  }
];
