import { SOCKETSERVERDOMAIN } from "../../server/components/constants";
import { io } from "socket.io-client";
export const socket = io(SOCKETSERVERDOMAIN);
