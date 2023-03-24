import { io } from "./components/server.js";

io.on("connection", (socket) => {
  socket.emit("wow", "hello world");
  
});
