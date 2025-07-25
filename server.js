import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Points to your db.json file
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // Use port from environment variable or 3001

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});