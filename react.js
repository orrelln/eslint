module.exports = {
  extends: ['./index.js', 'plugin:react/recommended', 'prettier'],
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
    'react/display-name': 0,
    'global-require': 0,
  },
};
