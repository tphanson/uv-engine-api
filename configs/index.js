const env = process.env.NODE_ENV;

const settings = require('./settings.config');

/**
 * Module exports
 */
module.exports = {
  settings: settings[env],
};
