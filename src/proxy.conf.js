
console.log('Proxy is running!');

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = {
  '/rutaLinea/*': {
    target: 'https://mrb.red-bus.com.ar/rest/rutaLinea/',
    changeOrigin: true,
    secure: true,
    logLevel: 'debug'
  },
  '/posicionesBuses/*': {
    target: 'https://mrb.red-bus.com.ar/rest/posicionesBuses/',
    changeOrigin: true,
    secure: true,
    logLevel: 'debug'
  }
}