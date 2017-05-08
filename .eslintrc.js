// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // 参数设置为0,表示忽略此规则
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ["error", "never"],
    // eslint eol-last: ["error", "always"]
    "indent": ["error", 2],
    // "no-unused-vars": ["error", { "vars": "local", "args": "none", "ignoreRestSiblings": false, "varsIgnorePattern": "[iI]gnored" }],
    'no-unused-vars': 0
  }
}
