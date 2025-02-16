// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    // Make Prettier issues show as warnings (or errors if you prefer)
    'prettier/prettier': [
      'warn',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'no-unused-vars': 'error',
    'no-unused-vars': 'error',
    // Additional strict rules can be added here:
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    // Add more structure/lint rules as needed...
  },
};
