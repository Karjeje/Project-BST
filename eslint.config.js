import js from '@eslint/js';
import globals from 'globals';
import n from 'eslint-plugin-n';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      n,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...n.configs.recommended.rules,
      ...prettier.rules,
    },
  },
]);
