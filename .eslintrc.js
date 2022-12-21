module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'react-hooks', 'react-hooks-addons', 'jest'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react-hooks-addons/no-unused-deps': 'warn'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json']
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      rules: {
        'prefer-spread': 0,
        'prefer-rest-params': 0,
        '@typescript-eslint/no-non-null-assertion': 0
      }
    }
  ]
};
