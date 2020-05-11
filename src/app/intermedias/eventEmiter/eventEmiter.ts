import { EventEmitter } from '@angular/core';

export class Jugador2 {

  hp: number;
  hpCambia = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  recibeDanio(danio: number) {
    this.hp = (danio > this.hp) ? 0 : this.hp - danio;
    return this.hpCambia.emit(this.hp);
  }

}
