const { override, fixBabelImports, addLessLoader } = require('customize-cra');
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
// );
module.exports = override(addLessLoader());
