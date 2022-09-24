function sendSingle(api, msg, userId) {
  api.sendMessage(msg, userId, (err, info) => {
    if (err) return console.log(err);
    console.log(info);
  });
}

module.exports = sendSingle;
