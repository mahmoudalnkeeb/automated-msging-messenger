const fs = require('fs');
const login = require('facebook-chat-api');
const constants = require('./configs/constant');

// script methods
const sendSingle = require('./sendSingle');
const sendToMultiUser = require('./send2Multi');
const multiMsgSingleUser = require('./multi2single');
const calculator = require('./calculator');

let credentials = {
  appState: JSON.parse(fs.readFileSync(constants.appStateDir, 'utf-8')),
};

exports.singleMessage = (message, id) => {
  login(credentials, { forceLogin: true }, (err, api) => {
    if (err) return console.log(err);
    sendSingle(api, message, id);
  });
};

exports.multiMessage = (message, ids) => {
  login(credentials, { forceLogin: true }, (err, api) => {
    if (err) return console.log(err);
    sendToMultiUser(api, ids, message);
  });
};

exports.multiMessageSingleUser = (messages, id) => {
  login(credentials, { forceLogin: true }, (err, api) => {
    if (err) return console.log(err);
    multiMsgSingleUser(api, messages, id);
  });
};

exports.calculator = () => {
  login(credentials, { forceLogin: true }, (err, api) => {
    if (err) return console.log(err);
    calculator(api);
  });
};
