const { readPath } = require('../helpers/file');

module.exports = {

  /**
   * Get path
   * @function getPath
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getPath: function (req, res, next) {
    const { mapId } = req.query;
    if (!mapId) return next('Invalid input');

    const data = { mapId, path: [] }
    return res.send({ status: 'OK', data });
  },

  /**
   * Get current path
   * @function getCurrentPath
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getCurrentPath: function (req, res, next) {
    const { mapId } = readMap() || {};
    const path = readPath();
    const data = { mapId, path }
    return res.send({ status: 'OK', data });
  },

  /**
   * Create a new path
   * @function newPath
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  newPath: function (req, res, next) {
    const { mapId, path } = req.body;
    if (!mapId || !path) return next('Invalid input');

    return res.send({ status: 'OK', data: {} });
  },

  /**
   * Update existing path
   * @function updatePath
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  updatePath: function (req, res, next) {
    const { mapId, path } = req.body;
    if (!mapId || !path) return next('Invalid input');

    return res.send({ status: 'OK', data: {} });
  },

  /**
   * Delete path
   * @function deletePath
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  deletePath: function (req, res, next) {
    const { mapId, path } = req.body;
    if (!mapId || !path) return next('Invalid input');

    return res.send({ status: 'OK', data: {} });
  },
}