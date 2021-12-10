const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://dab2-165-246-39-29.jp.ngrok.io',
        changeOrigin: true,
      })
    );
  };