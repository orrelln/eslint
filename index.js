module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['prettier', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import', 'prettier', 'only-warn'],
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, bracketSpacing: false },
    ],
    'no-use-before-define': 0,
    'arrow-body-style': 0,
  },
};
