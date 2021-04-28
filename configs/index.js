const env = process.env.NODE_ENV;

const settings = require('./settings.config');
const files = require('./files.config');

/**
 * Module exports
 */
module.exports = {
  settings: settings[env],
  files: files[env],
};
