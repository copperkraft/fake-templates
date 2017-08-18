const database = require('../data');

module.exports = {
  getById() {
    return database.tag.findAll();
  },
  add(tag) {
    return database.tag.create({name: tag});
  }
};
