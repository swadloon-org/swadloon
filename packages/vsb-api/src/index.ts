import express, { Request, Response } from 'express';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = express();

server.get('/', (req: Request, res: Response) => {
  console.log(req);
  res.send('okkk');
});
const httpServer = server.listen(port);
console.log('listening on port: ' + port);

process.on('SIGINT', function () {
  httpServer.close(function () {
    console.log('Finished all requestsss');
  });
});
process.on('SIGTERM', function () {
  httpServer.close(function () {
    console.log('Finished all requests');
  });
});
