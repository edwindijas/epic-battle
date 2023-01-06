const {override, addBabelPlugins, addExternalBabelPlugins} = require('customize-cra')

module.exports = override(
  ...addExternalBabelPlugins(
    '@babel/plugin-transform-classes',
  ),
)