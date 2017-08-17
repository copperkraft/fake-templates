const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');

const api = require('./api');

const koa = new Koa();
const app = new Router();

api(app);

koa.use(app.routes());
koa.use(serve('dist'));

koa.listen(3001);
