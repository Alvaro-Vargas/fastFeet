module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [ 'airbnb-base', 'prettier'], //Added prettier to this array
  plugins: ['prettier'], //Added this config
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: { //Changed the rules of the file
    "prettier/prettier": "error", //To signalize prettier non-conformities  as errors
    "class-methods-use-this": "off", //Not binding the classes to use "this"
    "no-param-reassign": "off",
    "camelcase": "off", //No need to use camelcase to name variables
    //Next is "not used" technically, but we use like that in the middleware
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }] 
  },
};
