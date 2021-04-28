/**
 * Contructor
 */
const configs = {};
const { env: { BOT_ID } } = process;

/**
 * Development configurations
 */
configs.development = {
  map: './app/map.json',
  info: './app/ohmni_map.yaml',
  image: './app/ohmni_map.pgm',
  path: './app/ohmni_path.json',
};

/**
 * Staging configurations
 */
configs.staging = {
  map: './app/map.json',
  info: './app/ohmni_map.yaml',
  image: './app/ohmni_map.pgm',
  path: './app/ohmni_path.json',
};

/**
 * Production configurations
 */
configs.production = {
  map: '/app/map.json',
  info: '/app/ohmni_map.yaml',
  image: '/app/ohmni_map.pgm',
  path: '/app/ohmni_path.json',
};

/**
 * Module exports
 */
module.exports = configs;