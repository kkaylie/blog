import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginImport from 'eslint-plugin-import'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      import: eslintPluginImport,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js internal modules
            'external', // npm packages
            'internal', // internal modules
            ['parent', 'sibling'], // parent and sibling relative paths
            'index', // index file
            'object',
            'type', // type imports
          ],
          pathGroups: [
            // Put react and next related packages first
            {
              pattern: '{react,react-dom,react-router-dom}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
            // Internal modules
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'next/**'],
          'newlines-between': 'always', // Add empty lines between different groups
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },

  // disabled conflicting rules with Prettier
  eslintConfigPrettier,
]

export default eslintConfig
