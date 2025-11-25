/* docs:
- eslint: https://eslint.org/docs/latest/use/getting-started
- typescript-eslint: https://typescript-eslint.io/getting-started/
- linting with type information: https://typescript-eslint.io/getting-started/typed-linting/
- disable type checked: https://typescript-eslint.io/users/configs#disable-type-checked
- eslint-config-prettier: https://github.com/prettier/eslint-config-prettier#installation
- eslint-plugin-check-file: https://github.com/dukeluo/eslint-plugin-check-file?tab=readme-ov-file#usage
*/

import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import checkFile from 'eslint-plugin-check-file';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // ---------------------------
  // IGNORES
  // ---------------------------

  globalIgnores(['dist/', 'migrations/']),

  // ---------------------------
  // EXTENDED CONFIGS
  // ---------------------------

  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked, // "typescript-eslint": Strict with type information
  tseslint.configs.stylisticTypeChecked, // "typescript-eslint": Stylistic with type information

  // ---------------------------
  // SETTINGS
  // ---------------------------

  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      parserOptions: {
        projectService: true, // "typescript-eslint": Enables linting with type information
      },
    },
    plugins: { 'check-file': checkFile },
    rules: {
      // "eslint"
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['..', '../**', 'src/*'],
              message: 'Use a path alias instead',
            },
          ],
        },
      ],

      // "typescript-eslint"
      '@typescript-eslint/no-floating-promises': 'error',

      // "eslint-plugin-check-file"
      'check-file/filename-naming-convention': [
        'error',
        { '**/*.ts': 'KEBAB_CASE' },
        { ignoreMiddleExtensions: true },
      ],
      'check-file/folder-naming-convention': [
        'error',
        { '{src,tests}/**': 'KEBAB_CASE' },
      ],
    },
  },

  // ---------------------------
  // OVERRIDES
  // ---------------------------

  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    extends: [
      tseslint.configs.disableTypeChecked, // "typescript-eslint": Disables linting with type information
    ],
  },

  // ---------------------------
  // ESLINT-CONFIG-PRETTIER
  // ---------------------------

  eslintConfigPrettier, // Must be placed last to override other configs
]);
