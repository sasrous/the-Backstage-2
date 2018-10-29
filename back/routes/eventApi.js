const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');
const Event = require('../models/event')



router.post('/eventApi/:id',  function(req, res, next) {
  var id = req.params.id
  var newEvent = new Event( {
    eventId: id,
    joined: false,
    comments: [],
    usersJoined: [],
  } )

  newEvent.save( function(err) {
    if(err) {
      res.json(err)
    } else {
      res.json({
        message: "created",
        event: newPhone
      })
    }
  })
})

router.get('/eventApi/:id', function(req, res, next) {
  var id = req.params.id
  Event.findById( id, function(err, phone){
    if(err){
      res.json(err)
    } else {
      res.json(event)
    }
  })
})

router.put('/eventApi/:id', function(req, res, next) {
  var id = req.params.id;
  var eventToUpdate = {
    eventId: id,
    joined: req.body.joined || false,
    comments: this.comments.push(req.body.comments) || this.comments,
    usersJoined: this.usersJoined.push(req.body.usersJoined) || this.usersJoined,
    }
  });

module.exports = router;
