const database = require('../data');

const mapper = (post) => {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    createdAt: post.createdAt,
    tags: post.tags.map(tag => ({
      id: tag.id,
      name: tag.name
    }))
  };
};

module.exports = {
  getById(id) {
    return database.post.findOne({
      where: {id},
      include: [{
        model: database.tag
      }]
    })
      .then(data => mapper(data));
  },
  search(tags) {
    return database.post.findAll({
      include: [{
        model: database.tag
      }]
    })
      .then(data => data.map(mapper));
  },
  add(data) {
    return database.post.create(data);
  },
  set(postId, data) {

  }
};
