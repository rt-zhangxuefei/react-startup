const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');

// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

// 集成antd
// module.exports = override(
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: true,
//   }),
//   addLessLoader({
//     lessOptions: {
//       javascriptEnabled: true,
//       modifyVars: { '@primary-color': '#1890ff' },
//     },
//   }),
//   addWebpackPlugin(new AntdDayjsWebpackPlugin()),
// );
module.exports = override(addLessLoader());
