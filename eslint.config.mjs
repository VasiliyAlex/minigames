import js from '@eslint/js';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules'],
  },

  {
    files: ['**/*.{js,ts}'],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
    ],

    plugins: {
      unicorn,
    },

    linterOptions: {
      noInlineConfig: true,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'error',

      'unicorn/prefer-module': 'error',
    },
  },
);