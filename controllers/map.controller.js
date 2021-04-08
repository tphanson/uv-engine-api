const botshell = global.botshell;

module.exports = {

  /**
   * Get map
   * @function getMap
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getMap: function (req, res, next) {
    const { mapId, location } = req.query;
    if (!mapId || !location) return next('Invalid input');

    botshell.write(`cmd_load_uv_plan ${mapId} ${location} path_location\n`);
    return botshell.on('plan_loaded', function () {
      return res.send({ status: 'OK', data: { loaded: true } });
    });
  },

  /**
   * Create a new map
   * @function newMap
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  newMap: function (req, res, next) {
    const { mapId, location, data } = req.body;
    if (!mapId || !location || !data) return next('Invalid input');

    return res.send({ status: 'OK', data: {} });
  },

  /**
   * Update existing map
   * @function updateMap
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  updateMap: function (req, res, next) {
    const { mapId, location, data } = req.body;
    if (!mapId || !location || !data) return next('Invalid input');

    return res.send({ status: 'OK', data: {} });
  },

  /**
   * Delete map
   * @function deleteMap
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  deleteMap: function (req, res, next) {
    const { mapId, location } = req.body;
    if (!mapId || !location) return next('Invalid input');

    return res.send({ status: 'OK', data: {} });
  },
}