const getUser = require('./getUser');

function calculator(api) {
  api.listenMqtt(async (err, message) => {
    if (err) return console.log(err);
    if (message.body && message.threadID) {
      try {
        let calc = message.body.replace(/[^-()\d/*+.]/g, '');
        if (calc) {
          let result = eval(calc);
          api.sendMessage(`${result}`, message.threadID, (err, info) => {
            if (err) return console.log(err);

            // destructuring info object
            // to show more info about sender , thread , message and response
            getUser(api, message.senderID, (user) => {
              info.sender = user.name;
            });
            info.threadID =
              info.threadID == '' ? message.threadID : info.threadID;
            info.message = message.body;
            info.response = result;

            // cuz console.log works first i used setTimeout
            // to delay it untill object destructuring finished
            setTimeout(() => {
              console.log(info);
            }, 500);
          });
        } else {
          console.log('Not a Valid calculation process');
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  });
}

module.exports = calculator;
