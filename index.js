const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const net = require('net');

const env = process.env.NODE_ENV || 'development';

/**
 * Watch env
 */
console.log('*** Environment:', env);

/**
 * Configs
 */
const configs = require('./configs');
global.configs = configs;

/**
 * Botshell
 */
const BOTSHELL_PATH = '/data/data/com.ohmnilabs.telebot_rtc/files/bot_shell.sock';
const socket = net.createConnection({ path: BOTSHELL_PATH }, function () {
  console.log('*** Connected to the bot shell socket');
});
socket.on('connect', function () {
  global.botshell = socket;
});

/**
 * Creating express server
 */
const app = express();
const server = http.createServer(app);

/**
 * Middlewares
 */
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Router
 */

// Main APIs
const api = require('./routes/api');
app.use('/', api);

// Error handler
const { uncatchableAPI, errorHandler } = require('./routes/error');
app.use(uncatchableAPI);
app.use(errorHandler);


/**
 * Start server
 */
const { settings: { port } } = configs;
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') throw error;
  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.log(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.log(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('*** Listening on ' + bind);
}
