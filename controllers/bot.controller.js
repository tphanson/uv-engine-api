const configs = global.configs;

module.exports = {

  /**
   * Got bot info
   * @function getBotInfo
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getBotInfo: function (req, res, next) {
    const { settings: { botId } } = configs;
    return res.send({ status: 'OK', data: { botId } });
  }
}