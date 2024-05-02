import eslint from '@eslint/js';
// import prettierConfig from "eslint-config-prettier";
import deprecationPlugin from 'eslint-plugin-deprecation';
import jestPlugin from 'eslint-plugin-jest';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
// import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
  },
  {
    ignores: ['.next', '.pnp.*', 'public/'],
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
  },
  eslint.configs.recommended,
  // rules: {
  //   'indent': ['error', 2],
  //   'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  // },
);
