module.exports = {
  extends: ['airbnb', 'prettier'],
  rules: {
    'import/newline-after-import': ['error', { count: 0 }],
    'linebreak-style': 0,
    'react/jsx-one-expression-per-line': 1,
    'react/prefer-stateless-function': [0, { ignorePureComponents: 1 }],
    'class-methods-use-this': 0
  }
};
