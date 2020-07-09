const http = require("http");
const express = require("express");
const chalk = require("chalk");
const socket = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socket(server);

const port = 8080;

io.sockets.on("connection", (socket) => {
  console.log(`client connected: ${chalk.bold(socket.id)}`);
  socket.on("mouse", (data) => {
    socket.broadcast.emit("mouse", data);
  });
  socket.on("disconnect", () => {
    console.log(`client has disconnected: ${chalk.bold(socket.id)}`);
  });
});

server.listen(port, () => {
  console.log(chalk.green(`socketio server listening on port ${port}`));
});
