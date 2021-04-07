const express = require('express');
const router = express.Router();

/**
 * Middlewares & Graphs
 */
const {
  bot,
} = require('../controllers');

/**
 * Convention
 * @method GET: get data
 * @method POST: add new data
 * @method PUT: update data
 * @method DELETE: delete data
 */

// User
router.get('/bot', bot.getBotInfo);

/**
 * Module exports
 */
module.exports = router;