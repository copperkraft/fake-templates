const tags = require('../services/tags-service');

module.exports = (app, url) => {
  app.get(url, async ctx => {
    ctx.body = JSON.stringify(await tags.get());
  });
};
