const path = require('path');

const constants = {
  appStateDir: path.resolve(path.join(process.cwd(), './data/appstate1.json')),
  idsFileDir: path.resolve(path.join(process.cwd(), './data/all.txt')),
  idsOutputDir: path.resolve(path.join(process.cwd(), './data/ids.json')),
};

module.exports = constants;
