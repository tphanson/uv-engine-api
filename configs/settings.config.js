/**
 * Contructor
 */
var configs = {};

/**
 * Development configurations
 */
configs.development = {
  port: 3001,
};

/**
 * Staging configurations
 */
configs.staging = {
  port: 80,
};

/**
 * Production configurations
 */
configs.production = {
  port: 80,
};

/**
 * Module exports
 */
module.exports = configs;