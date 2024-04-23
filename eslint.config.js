// Plugins
// import jest from "eslint-plugin-jest";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";

// Configs
import prettierConfig from "eslint-config-prettier";
import reactConfig from "eslint-plugin-react/configs/recommended";

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ignores: [
      '.next',
      'public/',
    ],
    plugins: {
      jest,
      prettier,
      react,
    },
    prettierConfig,
    reactConfig,
    rules: {
      'indent': ['error', 2],
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
  }
];
