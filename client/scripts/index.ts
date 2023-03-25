import { Validator } from "./validation.js";

//buttons from index.html
const createLobbyBtn = document.getElementById("create-lobby");
const joinLobbyBtn = document.getElementById("join-lobby");
// validator instance from validator.ts
const validator: Validator = new Validator(
  document.getElementById("username") as HTMLInputElement,
  document.getElementById("lobby-code") as HTMLInputElement
);

createLobbyBtn?.addEventListener("click", () => {
  validator.validate("create");
});
joinLobbyBtn?.addEventListener("click", () => {
  validator.validate("join");
});
