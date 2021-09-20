const Koa = require('koa')
const app = new Koa()

const config = require('./conf')
const { loadModel } = require('./framework/loader.js')


const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const restful

app.listen(3000, () => {
    console.log('server at 3000')
})