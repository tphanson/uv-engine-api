const express = require('express');
const router = express.Router();

/**
 * Middlewares & Controllers
 */
const {
  bot,map,
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
router.post('/map', map.newMap);
router.put('/map', map.updateMap);
router.delete('/map', map.deleteMap);

// --env BOT_ID
// -v /data/data/com.ohmnilabs.telebot_rtc/files:/app

/**
 * Module exports
 */
module.exports = router;