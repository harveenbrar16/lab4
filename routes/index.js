var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Loving Family' });
});
router.get('/Bharpur', function(req, res, next) {
  res.render('Bharpur', { title: 'Bharpur' });
});
router.get('/Jaswinder', function(req, res, next) {
  res.render('Jaswinder', { title: 'Jaswinder' });
});
router.get('/Ravi', function(req, res, next) {
  res.render('Ravi', { title: 'Ravi' });
});
router.get('/Harveen', function(req, res, next) {
  res.render('Harveen', { title: 'Harveen' });
});

module.exports = router;
