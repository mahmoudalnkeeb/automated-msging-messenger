const constants = require('./lib/configs/constant');
const utils = require('./utils');

let idsText = fs.readFileSync(constants.idsFileDir, { encoding: 'utf-8' });

fs.writeFileSync(
  constants.idsOutputDir,
  `[${utils.removeRepeatedIds(utils.parseId(idsText))}]`
);
