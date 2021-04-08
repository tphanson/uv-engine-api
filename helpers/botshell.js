const net = require('net');

const BOTSHELL_PATH = '/app/bot_shell.sock';



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
botshell.once = function (msg, callback) {
  return botshell.init(function (socket) {
    socket.write(msg, function () {
      socket.end();
    });
    return socket.on('end', callback);
  });
}

module.exports = botshell;