export class Jugador {

  hp: number;

  constructor() {
    this.hp = 100;
  }

  recibeDanio(danio: number): number {
    this.hp = (danio > this.hp) ? 0 : this.hp - danio;
    return this.hp;
  }

}
