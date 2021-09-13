const Koa = require('koa')

const router = require('./routes').main

const app = new Koa()

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
