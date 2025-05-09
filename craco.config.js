const CracoLessPlugin = require('craco-less');

module.exports = {
  devServer: {
    port: 3002
  },
  webpack: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    },
    configure: (webpackConfig) => {
      // 找到处理 less/css 的 rule
      const oneOfRule = webpackConfig.module.rules.find((rule) => Array.isArray(rule.oneOf));
      if (oneOfRule) {
        oneOfRule.oneOf.unshift({
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset',
          exclude: /node_modules/,
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024 // 10kb 以下转 base64
            }
          }
        });
      }
      return webpackConfig;
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
