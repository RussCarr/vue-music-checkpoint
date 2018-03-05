var router = require('express').Router();
var Collection = require('../models/collection');

// //get Collection by User Id
// router.get('/api/users/:id/collection', (request, response, next) => {
//   Collect.find({ userId: request.params.id })
//     .then(collect => {
//       return response.send(collect);
//     })
//     .catch(next);
// });

//get all songs by user
router.get('/api/users/:id/collection', (request, response, next) => {
  Collection.find(request.query)
    .then(collection => {
      response.send(collection);
    })
    .catch(next);
});


//add a song
router.post('/api/users/:id/collection', (request, response, next) => {
  console.log('adding a track')
  Collection.create(request.body)
    .then(collection => {
      console.log('collection', collection)
      response.send(collection);
    })
    .catch(next);
});

//delete a song
router.delete('/api/users/:id/collection/:id', (request, response, next) => {
  Collection.findByIdAndRemove(request.params.id)
    .then(collection => {
      return response.send('collection Deleted');
      // 
    })
    .catch(next);
});

module.exports = { router };