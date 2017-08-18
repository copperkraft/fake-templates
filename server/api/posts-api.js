const posts = require('../services/posts-service');

module.exports = (app, url) => {
  app.get(url, async ctx => {
    ctx.body = JSON.stringify(await posts.search(['angular', 'react']));
  });

  app.post(url, async ctx => {
    const {data, tags} = JSON.parse(ctx.body);
    ctx.body = JSON.stringify(
      await posts.add(data, tags)
    );
  });

  app.get(url + '/:id', async ctx => {
    ctx.body = JSON.stringify(
      await posts.getById(ctx.params.id)
    );
  });

  app.put(url + '/:id', async ctx => {
    ctx.body = JSON.stringify(
      await posts.set(ctx.params.id, JSON.parse(ctx.body))
    );
  });
};
