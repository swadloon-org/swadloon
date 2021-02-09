// @ts-check

const serverless = require('serverless-http');
const express = require('express');
const morgan = require('morgan');
const server = express();

server.use(morgan('common'));
server.get('/api/hey', (req, res) => {
  res.send('hey')
})

exports.handler = serverless(server)


// exports.handler = async function(event, context) {
//   return {
//       statusCode: 200,
//       body: JSON.stringify({message: "Hello World"})
//   };
// }
