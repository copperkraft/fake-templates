const posts = require('../services/posts-service');

module.exports = (app, url) => {
  app.get(url, async ctx => {
    const {tag: tags, page, pageSize, minDate, maxDate} = ctx.request.query;
    ctx.body = JSON.stringify(
      await posts.search(tags, {page, pageSize}, {minDate, maxDate}));
  });

  app.post(url, async ctx => {
    const data = JSON.parse(ctx.request.body);
    ctx.body = JSON.stringify(
      await posts.add(data)
    );
  });

  app.get(url + '/:id', async ctx => {
    ctx.body = JSON.stringify(
      await posts.getById(ctx.params.id)
    );
  });

  app.put(url + '/:id', async ctx => {
    ctx.body = JSON.stringify(
      await posts.set(ctx.params.id, JSON.parse(ctx.request.body))
    );
  });
};
