const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', function (req, res) {
    res.send('Hello from the About Page')
  })

app.listen(3000, () =>{
    console.log("The server is running on port 3000")
})