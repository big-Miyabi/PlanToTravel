module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'indent': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    'eol-last': ['error', 'always'],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'newline-before-return': 'error',
    'no-dupe-class-members': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'require-yield': 'error',
    "prettier/prettier": [
      "error",
      {
        "printWidth": 60,
        "trailingComma": "es5",
        "tabWidth": 2,
        "semi": false,
        "singleQuote": true,
        "endOfLine": "auto"
      }
  ]
  }
};
