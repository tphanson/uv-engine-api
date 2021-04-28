const configs = global.configs;
const fs = require('fs');

const file = {}

file.readTxtFile = function (dir) {
  try {
    const raw = fs.readFileSync(dir, 'utf8');
    return raw;
  } catch (er) {
    return null;
  }
}

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
  const { files: { map, image, info } } = configs;
  return {
    ...file.readJsonFile(map),
    map: file.readTxtFile(image),
    info: file.readTxtFile(info)
  }
}
file.writeMap = function (json) {
  const { files: { map } } = configs;
  return file.writeJsonFile(json, map);
}

/**
 * Read/Write path file
 */
file.readPath = function () {
  const { files: { path } } = configs;
  return file.readJsonFile(path);
}
file.writePath = function (json) {
  const { files: { path } } = configs;
  return file.writeJsonFile(json, path);
}

module.exports = file;