const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('backend online 🚀')
})

app.get('/tarefas', (req, res) => {
  res.json([{ title: "teste" }])
})

app.listen(3000)
