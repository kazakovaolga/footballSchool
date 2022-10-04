module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint",'prettier', 'jest'],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },      
  extends: [
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "prettier"
  ],      
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // "overrides": [
  //   {
  //     "files": ["*.scss", "**/*.scss"],
  //     "customSyntax": "postcss-scss"
  //   }
  // ],
  rules: {
    indent: ["error", "tab"],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any":0,
    "no-unused-vars": 0,
    "no-undef": 0,
    indent: 0,
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "at-rule-no-unknown": [0],
    "selector-class-pattern": 0
  },
};