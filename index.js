module.exports = {
  extends: ['prettier', 'airbnb'],
  plugins: ['import', 'only-warn'],
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
    'no-use-before-define': 0,
    'arrow-body-style': 0,
  },
};
