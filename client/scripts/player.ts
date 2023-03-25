import { Weapon } from "./weapon";

export class Player {
  id: string;
  x: number;
  y: number;
  health: number;
  username: string;
  weapon: Weapon;
  constructor(id: string, x: number, y: number, username: string) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.username = username;
    this.health = 100;
    this.weapon = new Weapon();
  }
}
