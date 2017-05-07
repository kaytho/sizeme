var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var BraSize = require('../models/brasize');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SizeMe' });
});


router.get('/brasize', function(req, res, next) {
  BraSize.find({like: null}, function(err, corgis) {
    if (err) {
      console.log("error");
      } else {
        var randomNumber = Math.floor(Math.random() * brasize.length);
        var brasize = corgis[randomNumber];
        res.json(corgi);
      }
    });
  });


router.put('/corgis/:id', function(req, res, next) {
  var id = req.params.id;
  Corgi.findByIdAndUpdate(id, { $set: req.body }, function (err, corgi) {
    if (err) return res.status(500).send(err);
    res.json(corgi);
  });
});


module.exports = router;
