const fs = require('fs');
const { once } = require('../helpers/botshell');

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

    const msg = `load_uv_plan ${encodeURI(mapId)} ${encodeURI(location)} path_location\r\n`;
    return once(msg, 'data', function (re) {
      const loaded = Boolean(parseInt(re.toString()));
      return res.send({ status: 'OK', data: { mapId, location, loaded } });
    });
  },

  /**
   * Get current map
   * @function getCurrentMap
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getCurrentMap: function (req, res, next) {
    const data = fs.readFileSync('/app/map.json');
    const { mapId, location } = JSON.parse(data) || {};
    return res.send({ status: 'OK', data: { mapId, location } });
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