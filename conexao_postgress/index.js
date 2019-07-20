const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request , response ) =>
  response.json({info : 'API Node.js, Express e Postgres'
}))

app.get('/users', db.getUsers)

app.listen(port, () => {
    console.log (`App em execução na porta ${port}.`)
  })
