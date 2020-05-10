import { Jugador } from './clases';
describe('Pruebas de clases', () => {

  let jugador = new Jugador();

  beforeAll(() => {
    // antes de todas las pruebas
  });

  beforeEach(() => {
    // antes de cada prueba
    jugador = new Jugador();
  });

  afterAll(() => {
    // después de todas las pruebas
  });

  afterEach(() => {
    // después de cada prueba
  });


  it('Debe retornar 80 si el daño es 20', () => {
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe retornar 50 si el daño es 50', () => {
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Debe retornar 0 si el daño es mayor a 0', () => {
    const resp = jugador.recibeDanio(200);
    expect(resp).toBe(0);
  });

});
