module.exports = {
  lintOnSave: false,//eslint

  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'common': '@/common'

      }
    }
  }
}