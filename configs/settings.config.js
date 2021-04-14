/**
 * Contructor
 */
const configs = {};
const { env: { BOT_ID, WAPP_API_PORT } } = process;

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
  botId: BOT_ID,
  port: WAPP_API_PORT,
};

/**
 * Production configurations
 */
configs.production = {
  botId: BOT_ID,
  port: WAPP_API_PORT,
};

/**
 * Module exports
 */
module.exports = configs;