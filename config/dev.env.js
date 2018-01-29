var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  api: {
    request_headers: {
      //'User-Agent': '"Mobile-App-Broccoli-Forwarder"',
      //'Content-Type': '"application/json; charset=utf-8"',
      'Authorization': '"Basic ZGV2Ok9vUnJBYTIwMTde"'
    }
  }
})
