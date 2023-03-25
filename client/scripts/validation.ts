import { socket } from "./socket.js";

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
        this.usernameInput.style.border = "1px solid green";
        socket.emit("create-game", socket.id);
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
          socket.emit("join-game", socket.id);
        } else {
          this.idInput.style.border = "1px solid red";
        }
      } else {
        this.usernameInput.style.border = "1px solid red";
      }
    }
  }
}
