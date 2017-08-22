const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const bodyParser = require('koa-body-parser');

const api = require('./api');

const koa = new Koa();
const app = new Router();

api(app);

koa.use(bodyParser());
koa.use(app.routes());
koa.use(async (ctx, next) => {
  if (ctx.url.indexOf('js') === -1) { //
    ctx.url = '/';
  }
  await next();
});
koa.use(serve('dist'));

koa.listen(3001);

require('./default-info');
