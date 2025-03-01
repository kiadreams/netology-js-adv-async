import globals from 'globals';
import js from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['*.config.*', 'dist/', 'node_modules/', 'coverage/']
  },

  {
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        ...globals.browser,
      }
    },
  },

  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": 'warn',
      "no-undef": 'warn'
    },
  },
]