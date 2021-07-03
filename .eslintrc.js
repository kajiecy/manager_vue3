module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:jest/recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    'no-param-reassign': 'off',
    'max-classes-per-file': 0,
    'lines-between-class-members': 'off',
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-shadow': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    'no-case-declarations': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'prettier/prettier': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': {
      allowExpressions: true
    }
  },
  plugins: ['simple-import-sort']
}
