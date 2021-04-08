

module.exports = {

  /**
   * Got bot info
   * @function getBotInfo
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getBotInfo: function (req, res, next) {
    return res.send({ status: 'OK', data: {} });
  }
}