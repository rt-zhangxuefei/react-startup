const express = require('express');
const favicon = require('serve-favicon');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

const apiProxy = createProxyMiddleware([`${config.CONTEXT}/yourpath`, `${config.CONTEXT}/yourpath2`], {
  pathRewrite: { [`^${config.CONTEXT}`]: '' },
  target: config.API_HOST,
  changeOrigin: true,
});


app.use(compression());
app.use(config.CONTEXT, favicon(path.join(__dirname, 'build', 'favicon.ico')));

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '7d',
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};

// http代理
app.use(apiProxy);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  `${config.CONTEXT}/static`,
  express.static(path.join(__dirname, 'build', 'static'), options),
);

app.use(`${config.CONTEXT}/*`, (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(config.PORT, config.HOST, err => {
  if (!err) {
    console.log(`listening on http://${config.HOST}:${config.PORT}${config.CONTEXT}`);
  } else {
    throw err;
  }
});
