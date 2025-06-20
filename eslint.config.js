import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import love from 'eslint-config-love';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores([
    'node_modules/**',
    '.vscode/**',
    'coverage/**',
    '*.config.js'
  ]),
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd()
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      love,
      prettier,
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off'
    },
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx']
  }
])