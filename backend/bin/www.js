/* eslint-disable */
const http = require('http');
const app = require('../app');

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || 8000;

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});

server.on('error', (err) => {
  console.log(err);
});