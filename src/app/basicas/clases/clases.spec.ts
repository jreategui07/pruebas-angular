import { Jugador } from './clases';
describe('Pruebas de clases', () => {

  it('Debe retornar 80 si el daño es 20', () => {
    const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe retornar 50 si el daño es 50', () => {
    const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Debe retornar 0 si el daño es mayor a 0', () => {
    const jugador = new Jugador();
    const resp = jugador.recibeDanio(200);
    expect(resp).toBe(0);
  });

});
