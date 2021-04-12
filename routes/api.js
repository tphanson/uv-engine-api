const express = require('express');
const router = express.Router();

/**
 * Middlewares & Controllers
 */
const {
  bot, map, path,
} = require('../controllers');

/**
 * Convention
 * @method GET: get data
 * @method POST: add new data
 * @method PUT: update data
 * @method DELETE: delete data
 */

// Bot
router.get('/bot', bot.getBotInfo);

// Map
router.get('/map', map.getMap);
router.get('/map/current', map.getCurrentMap);
// router.post('/map', map.newMap);
// router.put('/map', map.updateMap);
// router.delete('/map', map.deleteMap);

// Path
// router.get('/path', path.getPath);
router.get('/path/current', path.getCurrentPath);
// router.post('/path', path.newPath);
router.put('/path', path.updatePath);
// router.delete('/path', path.deletePath);

/**
 * Module exports
 */
module.exports = router;