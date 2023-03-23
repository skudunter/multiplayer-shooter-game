import { Server } from "socket.io";
import { PORT } from "./constants";
// init server
export const io = new Server(PORT);
