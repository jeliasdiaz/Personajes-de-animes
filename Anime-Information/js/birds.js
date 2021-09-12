var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/html/death-note.html', function (req, res) {
  res.send('html/death-note.html')
})
// define the about route
router.get('/html/death-note.html', function (req, res) {
  res.send('About birds')
})

module.exports = router