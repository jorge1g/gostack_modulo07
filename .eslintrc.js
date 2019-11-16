module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': 'off',
    'camel-case': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_|^next$',
        varsIgnorePattern: '^React$',
      },
    ],
    'class-methods-use-this': 'off',
  },
};
