const express = require('express')
const app = express()
const routes = require('./rotas')


app.use(express.json())
app.use(routes)
app.listen(3001)