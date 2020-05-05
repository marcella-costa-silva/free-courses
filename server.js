const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', { express: server })

server.get('/', (req, res) => res.render('about'))
server.get('/portfolio', (req, res) => res.render('portfolio'))

server.listen(5000, () => console.log('O servidor está rodando'))