const posts = require('../services/posts-service');

module.exports = (app, url) => {
  app.get(url, async ctx => {
    ctx.body = JSON.stringify(
      await posts.get(ctx.params.id)
    );
  });
  app.put(url, async ctx => {
    ctx.body = JSON.stringify(
      await posts.set(ctx.params.id, JSON.parse(ctx.body))
    );
  });
};
