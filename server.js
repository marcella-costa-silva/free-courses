const express = require('express')
const server = express()

server.get('/', (req, res) => {
  return res.send('olá, testando')
})

server.listen(5000, () => console.log('O servidor está rodando'))