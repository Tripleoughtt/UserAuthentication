'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');
var authMiddleware = require('../config/auth');

router.get('/', authMiddleware, function(req, res) {
  console.log(req.cookies)
  User.findById(req.cookies.userId, function(err, user){
  console.log(user);
  res.render('profile', {data: {email: user.email, name: user.name, picture: user.picture}});
    
  })
});

router.get('/edited', function(req,res){
  res.render('edited')
})

// {data: {name: , email: , picture: }}
router.post('/yourMother', function(req, res){
  // console.log(req.cookies)
  var data = {body: req.body, cookies: req.cookies}
  User.edit(req, function(err, user){
    if(err)return console.log(err);
    console.log(user)
    res.send('/edited')
  })
});

module.exports = router;
