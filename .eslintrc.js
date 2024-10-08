module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:i18next/recommended'],
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
    'i18next',
    'react-hooks'
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
    'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['to', 'data-testid'] }],
    'max-len': [1, { ignoreComments: true, code: 150 }],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'

      }
    }
  ]
};
