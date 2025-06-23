import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import love from 'eslint-config-love';
import prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react'

export default defineConfig([
  globalIgnores([
    'node_modules/**',
    '.vscode/**',
    'coverage/**',
    '*.config.js',
    'public/**',
    '*.scss'
  ]),
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd()
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      love,
      prettier,
      react
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error'
    },
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx']
  }
])