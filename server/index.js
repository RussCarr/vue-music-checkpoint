var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

require('./server-assets/db/mlab-config');
var collectionRoutes = require("./server-assets/routes/collections");
var userRoutes = require("./server-assets/routes/users");

//Server Setup

let server = express();
let port = 3000;
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//router server setups
server.use(collectionRoutes.router);
server.use(userRoutes.router);

server.get('*', (request, response, next) => {
  console.log('I am being requested')
  response.send(request.query);
  next()
})

server.use('*', (err,req,res,next) =>{
  res.status(400).send(err);
});

server.listen(port, () =>{
  console.log('server is now running on port:', port)
})