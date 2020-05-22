const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Fuck the world, don\'t ask me for shit')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

