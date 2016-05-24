var express = require('express')
//var compression = require('compression')
var app = express()

app.set('view engine', 'pug')

//app.use(compression())
app.use(express.static('public', { maxAge: 86400000 }))

// Home Page
app.get('/', function (req, res) { res.render('index') })

// Editing Demo
app.get('/editing', function (req, res) { res.render('editing') })

// Debugging Demo
app.get('/debugging', function (req, res) { res.render('debugging') })

// Profiling Demo
app.get('/profiling', function (req, res) { res.render('profiling') })

// Profiling Demo
app.get('/page-jank', function (req, res) { res.render('page-jank') })

// Memory Leaks
app.get('/memory-leaks', function (req, res) { res.render('memory-leaks/index') })

app.get('/memory-leaks/accidental-globals', function (req, res) {
  res.render('memory-leaks/accidental-globals')
})

app.get('/memory-leaks/callbacks-and-timers', function (req, res) {
  res.render('memory-leaks/callbacks-and-timers')
})

app.get('/memory-leaks/forgotten-dom', function (req, res) {
  res.render('memory-leaks/forgotten-dom')
})

app.get('/memory-leaks/closures', function (req, res) {
  res.render('memory-leaks/closures')
})

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000')
})