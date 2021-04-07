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
    console.log(process.env)
    return res.send({ status: 'OK', data: {} });
  }
}