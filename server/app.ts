import { io } from "./components/server.js";
import { app } from "./components/server.js";

io.on("connection", (socket) => {
  console.log('user connected');
  
  socket.on("join-game", () => {
    // join game code:
  });

  socket.on("create-game", (id) => {
    // create game code:
    
    app.get(`/games/${id}`, (req, res) => {
      res.sendFile('/home/daniel/code/javascript/multiplayer-shooter-game/public/game.html')
      req._destroy;
    });


  });
});
