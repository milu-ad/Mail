module.exports = {
  configureWebPack: {
    resolve: {
      extensions: [],
      alias: {
        '@': 'src',
        'common': 'src/common',
        'components': 'src/components',
        'network': 'src/network',
        'views': 'src/views'
      }
    }
  }
}