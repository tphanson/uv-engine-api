const net = require('net');

const BOTSHELL_PATH = '/app/bot_shell.sock';

const botshell = {}

/**
 * Botshell client
 */
botshell.init = function (callback) {
  const socket = net.createConnection({ path: BOTSHELL_PATH }, function () {
    console.log('*** Connected to the bot shell socket');
  });
  socket.on('connect', function () {
    console.log('*** Botshell connected');
    return callback(socket);
  });
}

/**
 * Write, listen and then close
 */
botshell.once = function (msg, event, callback) {
  return botshell.init(function (socket) {
    let response = null;
    msg = msg + '\r\n';
    socket.write(msg, function () {
      return socket.on(event, function (re) {
        if (re.toString() == 'Connected to ohmni bot_shell.\n') return;
        response = re;
        socket.end();
      });
    });
    return socket.on('end', function () {
      return callback(response);
    });
  });
}

module.exports = botshell;