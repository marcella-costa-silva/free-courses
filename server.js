const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', { 
  express: server, 
  autoescape: false,
  noCache: true
})

server.get('/', (req, res) => {
  const about = {
    avatar_url: 'https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png',
    name: 'Aulas de Programação no Youtube',
    role: 'Javascript, Node, React, Angular, Vue, Python...',
    description: 'Diversos conteúdos de programação totalmente gratuitos.',
    links: [{
      name: 'Github', url: 'https://github.com'
    }, {
      name: 'Twitter', url: 'https://twitter.com'
    }, {
      name: 'LinkedIn', url: 'https://linkedin.com'
    }]
  }

  return res.render('about', { about })
})

server.get('/portfolio', (req, res) => {
  const about = {
    avatar_url: 'https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png',
    name: 'Aulas de Programação no Youtube'
  }
  return res.render('portfolio', { items: videos, about })
})

server.use((req, res) => res.status(404).render('not-found'))

server.listen(5000, () => console.log('O servidor está rodando'))