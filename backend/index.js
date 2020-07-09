const http = require("http");
const express = require("express");
const chalk = require("chalk");

const app = express();
const server = http.createServer(app);

const port = 8080;

server.listen(port, () => {
  console.log(chalk.green(`socketio server listening on port ${port}`));
});
