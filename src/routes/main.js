const Router = require('@koa/router')

const router = new Router()

router.get('/', async ctx => {
  ctx.body = 'testest'
})

module.exports = router
