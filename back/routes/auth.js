const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');
const Event = require('../models/event')
const { isLoggedIn } = require('../helpers/is-logged');

router.get('/me', (req, res, next) => {
  // console.log('me', req.session.currentUser);
  if (req.session.currentUser) {
    res.json(req.session.currentUser);
  } else {
    res.status(404).json({
      error: 'not-found'
    });
  }
});


router.post('/login', (req, res, next) => {
  if (req.session.currentUser) {
    return res.status(401).json({
      error: 'unauthorized'
    });
  }

  const {
    username,
    password
  } = req.body;

  if (!username || !password) {
    return res.status(422).json({
      error: 'validation'
    });
  }

  User.findOne({
      username
    })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          error: 'not-found'
        });
      }
      if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;
        return res.json(user);
      }
      return res.status(404).json({
        error: 'not-found'
      });
    })
    .catch(next);
});


router.post('/signup', (req, res, next) => {
  const {
    username,
    password
  } = req.body;

  if (!username || !password) {
    return res.status(422).res.json({
      error: 'empty'
    });
  }

  User.findOne({
      username
    }, 'username')
    .then((userExists) => {
      if (userExists) {
        return res.status(422).json({
          error: 'username-not-unique'
        });
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = User({
        username,
        password: hashPass,
        about: 'empty',
        age: 'empty',
        name: 'empty',
        eventsJoined : [],

      });

      return newUser.save().then(() => {
        req.session.currentUser = newUser;
        res.json(newUser);
      });
    })
    .catch(next);
});

router.post('/logout', (req, res) => {
  req.session.currentUser = null;
  return res.status(204).send();
});

router.get('/private', isLoggedIn(), (req, res, next) => {
  
  res.status(200).json({
    message: 'This is a private message'
  });
});

router.put('/edit', isLoggedIn(), (req, res, next) => {

  var newUserData = req.body
  const id = req.session.currentUser._id
  var dataToUpdate = {
      id: id, 
      username: req.session.currentUser.username,
      password: req.session.currentUser.password,
      about: newUserData.about ,
      age: newUserData.age,
      name: newUserData.name,
      eventsJoined : req.session.currentUser.eventsJoined,
    }

  req.session.currentUser =  dataToUpdate

  
  User. findByIdAndUpdate(id , dataToUpdate, function(err){
    if(err) {
      res.json(err)
    } else {
      res.json({message: "updated"})
    }
  });
});
router.put('/join', isLoggedIn(), (req, res, next) => {

  var newEventId = req.body.id
  const id = req.session.currentUser.id
  let eventArray = [];

  User.findOne(id).then((data)=> {
    eventArray = data.eventsJoined
    console.log(eventArray, "old data from mongo")
  }).then(() => {
    eventArray.push(newEventId)
    console.log(eventArray, "new data to update")
    const dataToUpdate = {
      eventsJoined : eventArray,
    }
    req.session.currentUser =  dataToUpdate
    User.findOneAndUpdate(id, dataToUpdate, function(err){
      if(err) {
        res.json(err)
      } else {
        res.json({message: "updated"})
      }
    });
  })
});

router.put('/delete', isLoggedIn(), (req, res, next) => {
  const id = req.session.currentUser._id
  var EventId = req.body
  const arr = req.session.currentUser.eventsJoined
  var index = arr.indexOf(EventId);
  if (index > -1) {
    array.splice(index, 1);
  }
  var dataToUpdate = {
    id: id, 
    username: req.session.currentUser.username,
    password: req.session.currentUser.password,
    about: req.session.currentUser.about ,
    age: req.session.currentUser.age,
    name: req.session.currentUser.name,
    eventsJoined : arr,
  }
  req.session.currentUser =  dataToUpdate

  User. findByIdAndUpdate(id , dataToUpdate, function(err){
    if(err) {
      res.json(err)
    } else {
      console.log("updated")
      res.json({message: "updated"})
    }
  });

})
module.exports = router;
