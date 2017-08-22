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
    if (tags) {
      return database.post.findAll({
        include: [{
          model: database.tag,
          where: {
            id: tags
          }
        }]
      })
        .then(data => data.map(mapper));
    } else {
      return database.post.findAll({
        include: [{
          model: database.tag
        }]
      })
        .then(data => data.map(mapper));
    }
  },
  add(data) {
    console.log(JSON.stringify(data));
    return database.post.create(data)
      .then(post => {
        return database.tag.findAll(
          {
            where: {
              id: data.tags.map(tag => tag.id)
            }
          })
          .then(tags => post.setTags(tags));
      });
  },
  set(postId, data) {
    return database.post.findById(postId)
      .then(post => post.update(data))
      .then(post => database.tag.findAll(
        {
          where: {
            id: data.tags.map(tag => tag.id)
          }
        })
        .then(tags => post.setTags(tags))
      );
  }
};
