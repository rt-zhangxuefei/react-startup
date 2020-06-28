const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
  target: 'http://localhost:3001/',
  changeOrigin: true,
  logLevel: 'debug',
});

module.exports = function (app) {
  // app.use('/api',apiProxy)
};
