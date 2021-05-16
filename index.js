module.exports = {
  extends: ['prettier', 'airbnb'],
  plugins: ['prettier', 'import', 'only-warn'],
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, bracketSpacing: false },
    ],
    'no-use-before-define': 0,
    'arrow-body-style': 0,
  },
};
