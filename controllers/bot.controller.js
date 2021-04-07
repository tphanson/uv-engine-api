const configs = global.configs;
const crypto = require('crypto');
const { execSync } = require('child_process');

module.exports = {

  /**
   * Got bot info
   * @function getBotInfo
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getBotInfo: function (req, res, next) {
    const androidId = execSync('settings get secure android_id').toString().split('\n')[0];
    const botId = crypto.createHash('sha256').update(androidId).digest('hex');
    return res.send({ status: 'OK', data: {} });
  }
}