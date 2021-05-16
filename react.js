module.exports = {
  extends: ['./index.js', 'plugin:react/recommended'],
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-closing-bracket-location': 0,
  },
};
