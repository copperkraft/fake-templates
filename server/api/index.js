module.exports = app => {
  require('./tags-api')(app, '/api/tags');
  require('./post-api')(app, '/api/posts/:id');
  require('./posts-api')(app, '/api/posts');
};
