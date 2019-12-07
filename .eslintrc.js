module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2020,
    sourceType:  'module',
  },
  ecmaFeatures:  {
    jsx:  true,
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
  rules:  {
    "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": ["warn", {
      semi:  true,
      trailingComma:  'all',
      singleQuote:  true,
      printWidth:  80,
      tabWidth:  2,
    }],
  },
};
