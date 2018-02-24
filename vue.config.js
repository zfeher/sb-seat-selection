// const PrettierEslintPlugin = require('prettier-eslint-webpack-plugin')
// const fs = require('fs')

// const eslintConfig = fs.readFileSync('.eslintrc')

module.exports = {
  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: true,

  // configureWebpack: {
  //   plugins: [
  //     new PrettierEslintPlugin({
  //       extensions: ['.js', '.jsx', '.vue'],
  //       eslintConfig: eslintConfig
  //     })
  //   ]
  // }
}
