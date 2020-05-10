import { incrementar } from './numeros';

describe('Pruebas de números', () => {

  it('Debe retornar 100 si el número es mayor que 100', () => {
    const resp = incrementar(300);
    expect(resp).toBe(100);
  });

  it('Debe retornar el número + 1 si es menor que 100', () => {
    const numero = 20;
    const resp = incrementar(numero);
    expect(resp).toBe(numero + 1);
  });

});
