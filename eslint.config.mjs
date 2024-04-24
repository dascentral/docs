// @ts-check

import eslint from '@eslint/js';
import deprecationPlugin from 'eslint-plugin-deprecation';
import jestPlugin from 'eslint-plugin-jest';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
// import prettier from "eslint-plugin-prettier";
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

// Configs
// import prettierConfig from "eslint-config-prettier";
// import reactConfig from "eslint-plugin-react/configs/recommended";

export default tseslint.config(
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
  },
  {
    ignores: [
      '.next',
      '.pnp.*',
      'public/',
    ],
  },
  {
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
      ['deprecation']: deprecationPlugin,
      ['jest']: jestPlugin,
      ['jsx-a11y']: jsxA11yPlugin,
      ['react-hooks']: reactHooksPlugin,
      ['react']: reactPlugin,
    },
    // rules: {
    //   'indent': ['error', 2],
    //   'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // },
  }
);
