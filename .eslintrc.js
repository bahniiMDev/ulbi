module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    EcmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx']
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-indent': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.jsx', '.tsx']
    }],
    'import/no-unresolved': 'off',
    'no-tabs': 0,
    'no-unused-vars': [1],
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 0,
    'no-shadow': 0,
    'no-use-before-define': 'warn',
    'no-underscore-dangle': 0,
    'no-unsafe-optional-chaining': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['to'] }]
  },
  globals: {
    __IS_DEV__: true
  }
};
