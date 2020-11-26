const express = require('express')
const app = express();
const { commands } = require('../handlers/command-handler')

const rootRoutes = require('./routes/root-routes')
const authRoutes = require('./routes/auth-routes')

__dirname
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/assets`))
app.locals.basedir = `${dirname}/assets`

app.use('/', rootRoutes, authRoutes)

app.listen(3000, () => {
    console.log('server is ready')
})