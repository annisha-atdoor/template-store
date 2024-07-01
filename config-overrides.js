const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.handlebars$/,
    use: 'raw-loader'
  })
);