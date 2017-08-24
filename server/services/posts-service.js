const postMapper = require('./utils/post-mapper');
const postFilterCreator = require('./utils/post-filter-creator');
const paginator = require('./utils/paginator');

const database = require('../data');

module.exports = {
  getById(id) {
    return database.post.findOne({
      where: {id},
      include: [{
        model: database.tag
      }]
    })
      .then(data => postMapper(data));
  },
  search(tags, pagination, filters) {
    return database.post.findAll({
      include: [{
        model: database.tag,
        where: tags ? {id: tags} : null
      }]
    })
      .then(data => data.map(postMapper))
      .then(data => filters ? data.filter(postFilterCreator(filters)) : data)
      .then(paginator(pagination));
  },
  add(data) {
    return database.post.create(data)
      .then(post => {
        return database.tag.findAll(
          {
            where: {
              id: data.tags.map(tag => tag.id)
            }
          })
          .then(tags => {
            post.setTags(tags);
          })
          .then(() => {
            return postMapper(post);
          });
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
        .then(() => {
          return postMapper(post);
        })
      );
  }
};
