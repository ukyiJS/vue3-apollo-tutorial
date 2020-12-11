const { join } = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~': join(__dirname, 'src'),
        img: join(__dirname, 'src/assets/img'),
        css: join(__dirname, 'src/assets/css'),
        font: join(__dirname, 'src/assets/font'),
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('graphql')
      .test(/\.(gql|graphql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
  },
};
