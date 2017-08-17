const database = require('../data');

module.exports = {
  get() {
    return new Promise(resolve => resolve([
      'angular',
      'koa',
      'webpack',
      'node',
      'c++'
    ]));
  },
  set(tag) {}
};
