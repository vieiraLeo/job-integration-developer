
let server = require('./config/server')
require('./config/routes')(server)

module.exports = server;