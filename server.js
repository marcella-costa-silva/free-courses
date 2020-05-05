const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', { express: server, autoescape: false })

server.get('/', (req, res) => {
  const about = {
    avartar_url: 'https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_960_720.jpg',
    name: 'Aulas de Graça',
    role: 'Instrutores de Programação no YouTube',
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

server.get('/portfolio', (req, res) => res.render('portfolio', { items: videos }))

server.use((req, res) => res.status(404).render('not-found'))

server.listen(5000, () => console.log('O servidor está rodando'))