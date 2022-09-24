const _ = require('underscore');
module.exports = {
  parseId(ids) {
    return ids
      .split('\n')
      .map((id) => {
        if (typeof parseInt(id) == 'number') {
          return parseInt(id);
        }
      })
      .filter((id) => {
        return id.toString().length == 15;
      });
  },
  removeRepeatedIds(ids) {
    let uniqueIds = [];
    ids.forEach((id) => {
      if (!uniqueIds.includes(id)) {
        uniqueIds.push(id);
      }
    });
    return uniqueIds;
  },
};
