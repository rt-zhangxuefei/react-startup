const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
// const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require('craco-antd');
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
