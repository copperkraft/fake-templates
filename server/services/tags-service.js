const tagMapper = require('./utils/tag-mapper');

const database = require('../data');

module.exports = {
  get() {
    return database.tag.findAll()
      .then(data => data.map(tagMapper));
  },
  add(tag) {
    return database.tag.create({name: tag});
  }
};
