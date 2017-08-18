const database = require('../data');

module.exports = {
  get(id) {
    console.log(id);
    return database.post.findById(id);
  },
  search(tags, filters) {
    if (!tags) {
      return database.post.findAll();
    }
    return database.post.findAll();
  },
  add(data) {
    return database.post.create(data);
  },
  set(postId, data) {

  }
};
