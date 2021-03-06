var router = require('express').Router();
var User = require('../models/user');
var Collection = require('../models/collection');



//get a user
router.get('/api/users/:id', (request, response, next) => {
  User.findById(request.params.id)
    .then(users => {
      if (!users) {
        return response.status(400).send({ error: 'invalid Id' });
      }
      return response.send(users);
    })
    .catch(next);
});

//create a user
console.log('create a user')
router.post('/api/users', (request, response, next) => {
  User.create(request.body)
    .then(users => {
      console.log('users', users)
      response.send(users);
    })
    .catch(next);
});

module.exports = { router };