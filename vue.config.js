const { defineConfig } = require("@vue/cli-service");
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: config => {
    config.resolve = {
      // 配置解析别名 // test push
      extensions: ['.js', '.json', '.vue'], // 自动添加文件名后缀
      alias: {
        // vue: 'vue/dist/vue.js',
        '@': path.resolve(__dirname, './src'),
        'assets': path.resolve(__dirname, './src/assets'),
        'utils': path.resolve(__dirname, './src/utils'),
        'common': path.resolve(__dirname, './src/common'),
        'components': path.resolve(__dirname, './src/components'),
        'network': path.resolve(__dirname, './src/network'),
        'configs': path.resolve(__dirname, './src/configs'),
        'views': path.resolve(__dirname, './src/views'),
        'plugins': path.resolve(__dirname, './src/plugins'),
      }
    }
  },
});