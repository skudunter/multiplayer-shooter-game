import { io } from "./components/server.js";

io.on("connection", (socket) => {

  socket.on("join-game", (arg) => {
    // join game code:
    console.log(arg);    
  });

  socket.on("create-game", (arg) => {
    // create game code:
    console.log(arg);
  });

  
});
