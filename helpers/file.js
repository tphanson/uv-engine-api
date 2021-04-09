const fs = require('fs');

const MAP = '/app/map.json';
const PATH = '/app/ohmni_path.json'

const file = {}

file.readJsonFile = function (dir) {
  try {
    const raw = fs.readFileSync(dir);
    const json = JSON.parse(raw);
    return json;
  } catch (er) {
    return null;
  }
}

/**
 * Read map file
 */
file.readMap = function () {
  return file.readJsonFile(MAP);
}

/**
 * Read path file
 */
file.readPath = function () {
  return file.readJsonFile(PATH);
}

module.exports = file;