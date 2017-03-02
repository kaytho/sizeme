var express = require('express');
var User = require('../models/user');
var router = express.Router();
var apiKey = process.env.DB_CONN_sizeme;
var request = require('request');
var mongoose = require('mongoose');
var ussize = require('ussize');
var uksize= require('uksize');
var eusize= require('eusize');


router.get('/usize/:id', function(req, res,next){
  var ussizeId = req.params.id;
  ussize.find({}, function(err,data){
    res.json(data);
  });
} );

router.get('/uksize/:id', function(req, res, next){
  var uksizeId = req.params/id;
  uksize.find({}, function(err, data){
    res.json(data);
  });
});

router.get('/eusize/:id', function(req, res,next){
  var eusizeId = req.params.id;
  eusize.find({}, function(err,data){
    res.json(data);
  });
} );
