const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

let tarefas = []

// rota raiz
app.get('/', (req, res) => {
  res.send('Backend online 🚀')
})

// health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// listar tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas)
})

// criar tarefa
app.post('/tarefas', (req, res) => {
  const nova = {
    id: Date.now(),
    title: req.body.title || "sem título",
    completed: false
  }
  tarefas.push(nova)
  res.json(nova)
})

// atualizar tarefa
app.put('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id)
  tarefas = tarefas.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  )
  res.json({ ok: true })
})

// deletar tarefa
app.delete('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id)
  tarefas = tarefas.filter(t => t.id !== id)
  res.json({ ok: true })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Servidor rodando 🚀')
})
