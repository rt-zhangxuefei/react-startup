const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
const ESLintPlugin = require('eslint-webpack-plugin');
// const CracoLessPlugin = require('./craco/plugins/craco-less');
const CracoAntDesignPlugin = require('./craco/plugins/craco-antd');
const path = require('path');

// Don't open the browser during development
process.env.BROWSER = 'none';

module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === 'development'
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : []),
      new ESLintPlugin(),
    ],
  },
  plugins: [
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         javascriptEnabled: true,
    //       },
    //     },
    //   },
    // },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, 'src/style/antd/customTheme.less'),
      },
    },
  ],
};
