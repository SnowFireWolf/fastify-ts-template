module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: './'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    quotes: [
      2, 'single', { avoidEscape: true }
    ],
    'no-multiple-empty-lines': 0,

    semi: [2, 'always'],

    'comma-dangle': ['error', {
      arrays: 'only-multiline',
      objects: 'only-multiline',
      exports: 'only-multiline',
      functions: 'only-multiline',
    }],
  },
};
