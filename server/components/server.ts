import { createServer } from "http";
import express from "express";
import { Server } from "socket.io";
import { PORT } from "./constants.js";

export const app = express();
export const server = createServer(app);
export const io = new Server(server);

app.get('/', (req,res) => {
    res.send('hello world');
    req._destroy;
  });

server.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
