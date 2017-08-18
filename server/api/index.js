module.exports = app => {
  require('./tags-api')(app, '/api/tags');
  require('./posts-api')(app, '/api/posts');
};
