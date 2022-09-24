function multiMsgSingleUser(api, msgs, id) {
  let promise = Promise.resolve();
  msgs.forEach((msg) => {
    promise = promise.then(() => {
      api.sendMessage({ body: msg }, id, (err, info) => {
        if (err) return console.log(err);
        console.log(info);
      });
      return new Promise((res) => {
        setTimeout(res, 10000);
      });
    });
  });

  promise.then(() => {
    console.log('done');
  });
}

module.exports = multiMsgSingleUser;
