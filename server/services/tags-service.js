const database = require('../data');

module.exports = {
  get() {
    return database.tag.findAll();
  },
  add(tag) {

  }
};
