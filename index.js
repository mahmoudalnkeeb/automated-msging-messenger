const {
  singleMessage,
  multiMessage,
  multiMessageSingleUser,
  calculator,
} = require('./lib/login');
const fs = require('fs');
const constants = require('./lib/configs/constant');
const arrOfRandom = require('./lib/sendRandomAscii/randomAscii');
const { SENDING_TYPE } = require('./lib/configs/env');

// sendMsg(msg, userId);
console.log(SENDING_TYPE);

const config = {
  sendingType: SENDING_TYPE,
  id: '100069706383905',
  idToSpam: '100016069057529',
  ids: fs.readFileSync(constants.idsOutputDir, { encoding: 'utf-8' }),
  message: { body: 'TEST MESSAGE' },
  messages: arrOfRandom,
};

switch (config.sendingType) {
  case 'single':
    singleMessage(config.message, config.id);
    break;
  case 'multi':
    multiMessage(config.message, config.ids);
    break;
  case 'spam':
    multiMessageSingleUser(config.messages, config.idToSpam);
    break;
  case 'calculator':
    calculator();
    break;
  default:
    console.log('here');
    break;
}
