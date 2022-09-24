function getUser(api, userId, userFn) {
  api.getUserInfo(userId, (err, info) => {
    if (err) return console.error(err);
    userFn(info[userId]);
  });
}

module.exports = getUser;
