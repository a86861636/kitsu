module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.js'
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.KITSU_API_TARGET || 'http://47.104.136.30',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/socket.io': {
        target: process.env.KITSU_EVENT_TARGET || 'http://47.104.136.30',
        ws: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/variables.scss";`,
        implementation: require('sass')
      }
    }
  }
}
