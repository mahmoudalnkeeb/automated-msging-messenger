const options = { msgPerHour: 600 };
let delay = (1000 * 60 * 60) / options.msgPerHour;

function sendToMultiUser(api, idsArr, message) {
  try {
    let promise = Promise.resolve();

    JSON.parse(idsArr).forEach((id) => {
      promise = promise.then(() => {
        api.sendMessage(message, id, (err, info) => {
          if (err) return console.log(err);
          console.log(info);
        });
        return new Promise((res) => {
          setTimeout(res, delay);
        });
      });
    });

    promise.then(() => {
      console.log('all done');
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendToMultiUser;
