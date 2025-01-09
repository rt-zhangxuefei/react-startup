const CracoLessPlugin = require('craco-less');

module.exports = {
  devServer: {
    port: 3002
  },
  webpack: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
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
