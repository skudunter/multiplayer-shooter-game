import { createServer } from "http";
import express from "express";
import { Server } from "socket.io";
import { CLIENTDOMAIN, SERVERDOMAIN,PORT } from "./constants.js";

export const app = express();
export const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: CLIENTDOMAIN, //client-side URL
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("server active");
  req._destroy;
});

server.listen(PORT, () => {
  console.log(`Express server running at ${SERVERDOMAIN}`);
});
