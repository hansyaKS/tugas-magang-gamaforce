var express = require('express');
var router = express.Router();
var path = require('path')
var db = require('../db/db')

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '..', 'htmls', 'index.html'));
});

module.exports = router;