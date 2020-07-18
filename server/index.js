// tslint:disable
/* eslint-disable */
const express = require('express')
var bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, 1000)
}).then(() => res.json('11113')))


app.post('/login', (req, res) => new Promise(resolve => {
  setTimeout(() => {
    console.log(req.body, 'req.body')
    if (req.body && req.body.name === 'admin01') {
      resolve()
    }
  }, 1000)})
  .then(() => res.json({ token: 'token12345678' }))
  .catch(err => console.log(err))
)



// app.get('/', (req, res) => res.json('111'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))