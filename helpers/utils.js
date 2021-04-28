const utils = {}

utils.parseInfo = (infoYAML) => {
  try {
    const data = infoYAML.split('\n');
    const resolution = parseFloat(data[1].split(':')[1]);
    const origin = JSON.parse(data[2].split(':')[1]);
    return { resolution, origin }
  } catch (er) {
    return null;
  }
}

module.exports = utils;