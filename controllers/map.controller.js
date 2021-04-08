module.exports = {

  /**
   * Get map
   * @function getMap
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getMap: function (req, res, next) {
    const { _id, location } = req.query;
    if (!_id || !location) return next('Invalid input');

    return res.send({ status: 'OK', data: {} });
  },

  /**
   * Create a new map
   * @function newMap
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  newMap: function (req, res, next) {
    const { _id, location, data } = req.body;
    if (!_id || !location || !data) return next('Invalid input');

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
    const { _id, location, data } = req.body;
    if (!_id || !location || !data) return next('Invalid input');

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
    const { _id, location } = req.body;
    if (!_id || !location) return next('Invalid input');

    return res.send({ status: 'OK', data: {} });
  },
}