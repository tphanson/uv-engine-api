

module.exports = {

  /**
   * Got bot info
   * @function getBotInfo
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getBotInfo: function (req, res, next) {
    const botId = 'f7ad273221de50bcb69ce4b84ba368e19e690aacec6fd358dfb420600e21f913';
    return res.send({ status: 'OK', data: { botId } });
  }
}