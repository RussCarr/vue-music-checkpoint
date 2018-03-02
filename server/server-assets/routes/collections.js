var router = require('express').Router();
var Collect = require('../models/collection');

//get Collection by User Id
router.get('/api/users/:id/collection', (request, response, next) => {
  Collect.find({ userId: request.params.id })
    .then(collect => {
      return response.send(collect);
    })
    .catch(next);
});

//get all songs
router.get('/api/users/collection', (request, response, next) => {
  Collect.find(request.query)
    .then(collect => {
      response.send(collect);
    })
    .catch(next);
});


//add a song
router.post('/api/users/collection', (request, response, next) => {
  Collect.create(request.body)
    .then(collect => {
      console.log('collect', collect)
      response.send(collect);
    })
    .catch(next);
});

//delete a song
router.delete('/api/users/collection/:id', (request, response, next) => {
  Collect.findByIdAndRemove(request.params.id)
    .then(collect => {
      return response.send('collect Deleted');
      // 
    })
    .catch(next);
});

module.exports = { router };