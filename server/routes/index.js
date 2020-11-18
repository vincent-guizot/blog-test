const Router = require('koa-router')
const router = Router()
const userRoutes = require('./user')

router.get('/', async (ctx,next) => {
    ctx.body = 'ini adalah home bravo'
    ctx.status = 200;
})

router.use('/users', userRoutes.routes())

module.exports = router