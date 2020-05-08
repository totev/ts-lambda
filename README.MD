# ts-lambda

## Plugins required at build time

- TerserWebpackPlugin -> js minification with terser
- webpack -> artifact bundling
  -- webpack-cli -> well for cli execution of webpack
  -- webpack-node-externals -> exclude node_modules from bundle
  -- ts-loader -> load typescript directly in webpack
- linting and static code analysis
  -- "eslint": "^6.8.0",
  --- eslint-config-airbnb
  --- eslint-config-prettier
  --- eslint-plugin-import
  --- eslint-plugin-jsx-a11y
  --- eslint-plugin-prettier
  --- eslint-plugin-react
  --- prettier
  --- @typescript-eslint/eslint-plugin
  --- @typescript-eslint/parser

## General purpose plugins

- jest -> test harness
  -- ts-jest -> typescript support for jest
- husky -> for git hooks
