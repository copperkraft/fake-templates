module.exports = function postMapper(post) {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    createdAt: post.createdAt,
    tags: post.tags ? post.tags.map(tag => ({
      id: tag.id,
      name: tag.name
    })) : []
  };
};
