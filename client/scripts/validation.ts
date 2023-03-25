import { socket } from "./socket.js";
import {DOMAIN} from '../../server/components/constants.js';

export class Validator {
  usernameInput: HTMLInputElement;
  idInput: HTMLInputElement;
  constructor(usernameInput: HTMLInputElement, idInput: HTMLInputElement) {
    this.usernameInput = usernameInput;
    this.idInput = idInput;
  }
  validate(type: string) {
    if (type === "create") {
      //create game validations
      if (this.usernameInput.value.length > 4) {
        //data is valid    
        let id = socket.id.slice(0,5);
        this.usernameInput.style.border = "1px solid green";
        socket.emit("create-game",id,this.usernameInput.value);
        window.location.href = `http://${DOMAIN}/games/${id}`;
      } else {
        //data is not valid
        this.usernameInput.style.border = "1px solid red";
      }
    } else if (type === "join") {
      //join game validations
      if (this.usernameInput.value.length > 4) {
        if (this.idInput.value.length > 4) {
          // data is valid
          this.usernameInput.style.border = "1px solid green";
          this.idInput.style.border = "1px solid green";
          socket.emit("join-game",socket.id,this.usernameInput.value,this.idInput.value);
        } else {
          //id not valid
          this.idInput.style.border = "1px solid red";
        }
      } else {
        this.usernameInput.style.border = "1px solid red";
      }
    }
  }
}
