const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');
const Event = require('../models/event')



router.post('/:id',  function(req, res, next) {
  var id = req.params.id
  var newEvent = new Event( {
    eventId: id,
    comments: [],
    usersJoined: [],
  } )

  newEvent.save( function(err) {
    if(err) {
      res.json(err)
    } else {
      res.json({
        message: "created",
        event: newEvent
      })
    }
  })
})


router.get('/:id', function(req, res, next) {
  var id = req.params.id
  Event.find({eventId: id }, function(err, event){
    if(err){
      res.status(500).json(err)
      console.log("not found")
    } else {
      console.log("event", event)
      res.status(200).json(event)
    }
  })
})

router.put('/:id', function(req, res, next) {
  var id = req.params.id;
  var eventToUpdate = {
    eventId: id,
    comments: this.comments.push(req.body.comments) || this.comments,
    usersJoined: this.usersJoined.push(req.body.usersJoined) || this.usersJoined,
    }
  });

module.exports = router;
