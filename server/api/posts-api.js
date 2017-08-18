const posts = require('../services/posts-service');

module.exports = (app, url) => {
  app.get(url, async ctx => {
    ctx.body = JSON.stringify(await posts.search());
  });
  app.post(url, async ctx => {
    const {data, tags} = JSON.parse(ctx.body);
    ctx.body = JSON.stringify(
      await posts.add(data, tags)
    );
  });
};
