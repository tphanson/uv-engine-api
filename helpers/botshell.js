const net = require('net');

module.exports = {

  /**
   * Botshell client
   */
  initBotshell: function (callback) {
    const BOTSHELL_PATH = '/data/data/com.ohmnilabs.telebot_rtc/files/bot_shell.sock';
    const socket = net.createConnection({ path: BOTSHELL_PATH }, function () {
      console.log('*** Connected to the bot shell socket');
    });
    socket.on('connect', function () {
      console.log('*** Botshell connected');
      return callback(socket);
    });
  },

  /**
   * Write, listen and then close
   */
  once: function () {

  }
}