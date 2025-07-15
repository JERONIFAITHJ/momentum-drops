// eslint.config.js (in your monorepo root)
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'

import path from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default tseslint.config(
  // Global ignore patterns
  {
    ignores: ['**/dist', '**/node_modules'],
  },

  // Base configuration for all TypeScript files in the monorepo
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      // Prettier's recommended config is often a legacy string format, so use compat.extends
      ...compat.extends('plugin:prettier/recommended'),
    ],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // Remove project configuration from base config to avoid issues
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
      },
    },
    rules: {
      'no-console': globalThis.process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': globalThis.process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      eqeqeq: ['error', 'always'],

      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
    settings: {
      // General settings
    },
  },

  // --- OVERRIDES FOR FLAMINGO (React/TypeScript Frontend) ---
  {
    files: ['flamingo/**/*.{ts,tsx}'],
    extends: [
      // Use compat.extends for legacy configs only
      ...compat.extends('plugin:react/recommended', 'plugin:react-hooks/recommended'),
    ],
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // --- OVERRIDES FOR PHOENIX (Node.js/TypeScript Backend) ---
  {
    files: ['phoenix/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },

  // --- OVERRIDES FOR TEST FILES ---
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-expressions': 'off',
    },
  },

  // --- OPTIONAL: For plain JavaScript/JSX files (if you have any outside TS) ---
  {
    files: ['**/*.js', '**/*.jsx'],
    extends: [js.configs.recommended, ...compat.extends('plugin:prettier/recommended')],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // '@typescript-eslint/no-var-requires': 'off',
    },
  }
)
