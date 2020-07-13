// tslint:disable
 /* eslint-disable */ 
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, 10000)
}).then(() => res.json('11113')))


// app.get('/', (req, res) => res.json('111'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))