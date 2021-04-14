/**
 * Contructor
 */
const configs = {};

/**
 * Development configurations
 */
configs.development = {
  botId: 'f7ad273221de50bcb69ce4b84ba368e19e690aacec6fd358dfb420600e21f913',
  port: 3001,
};

/**
 * Staging configurations
 */
configs.staging = {
  botId: process.env.BOT_ID,
  port: 3001,
};

/**
 * Production configurations
 */
configs.production = {
  botId: process.env.BOT_ID,
  port: 3001,
};

/**
 * Module exports
 */
module.exports = configs;