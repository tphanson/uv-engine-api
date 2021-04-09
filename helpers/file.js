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

file.writeJsonFile = function (json, dir) {
  try {
    const data = JSON.stringify(json);
    fs.writeFileSync(dir, data);
  } catch (er) {
    return null;
  }
}

/**
 * Read/Write map file
 */
file.readMap = function () {
  return file.readJsonFile(MAP);
}
file.writeMap = function (json) {
  return file.writeJsonFile(json, MAP);
}

/**
 * Read/Write path file
 */
file.readPath = function () {
  return file.readJsonFile(PATH);
}
file.writePath = function (json) {
  return file.writeJsonFile(json, PATH);
}

module.exports = file;