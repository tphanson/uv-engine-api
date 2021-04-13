const { readMap, readPath } = require('../helpers/file');
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
    const { mapId, location, pathId } = req.query;
    if (!mapId || !location || !pathId) return next('Invalid input');

    const msg = `load_uv_plan ${encodeURI(mapId)} ${encodeURI(location)} ${encodeURI(pathId)}\r\n`;
    return once(msg, 'data', function (re) {
      if (!re) return res.next('ROS has no response');
      const loaded = Boolean(parseInt(re.toString()));
      const path = loaded ? readPath() : null;
      const data = { mapId, location, path, loaded }
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
    const { mapId, location } = readMap() || {};
    const path = readPath();
    const data = { mapId, location, path, loaded: Boolean(mapId) }
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