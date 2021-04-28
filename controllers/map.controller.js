const { readMap, readPath } = require('../helpers/file');
const { once } = require('../helpers/botshell');
const { parseInfo } = require('../helpers/utils');

module.exports = {

  /**
   * Get map
   * @function getMap
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getMap: function (req, res, next) {
    const { mapId, location, pathId } = req.query;
    if (!mapId || !location || !pathId) return next('Invalid input');

    const msg = `load_uv_plan ${encodeURI(mapId)} ${encodeURI(location)} ${encodeURI(pathId)}`;
    return once(msg, 'data', function (re) {
      if (!re) return next('ROS has no response');
      const loaded = Boolean(parseInt(re.toString()));
      if (!loaded) return next('Load map failed');
      const { map, info } = readMap() || {};
      const path = readPath();
      const data = { mapId, location, path, map, info: parseInfo(info) }
      return res.send({ status: 'OK', data });
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
    const { mapId, location, map, info } = readMap() || {};
    const loaded = Boolean(mapId);
    if (!loaded) return next('Load map failed');
    const path = readPath();
    const data = { mapId, location, path, map, info: parseInfo(info) }
    return res.send({ status: 'OK', data });
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