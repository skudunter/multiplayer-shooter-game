import { socket } from "./socket.js";

socket.on("hello", (arg) => {
  console.log(arg);
});
