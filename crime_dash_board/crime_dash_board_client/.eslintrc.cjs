module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-var': 'warn',
    "@typescript-eslint/no-unused-vars" : ['off'],
    'react-hooks/rules-of-hooks'  : ['off'],
    '@typescript-eslint/no-explicit-any' : ['off'],
    'react-hooks/exhaustive-deps' : ['off'],
    'prefer-const' : ['off'],
    'react-refresh/only-export-components': ["off"],
    'declared but its value is never read' : ["off"]
    },
}
