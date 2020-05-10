import { saludar } from './strings';

describe('Prueba de cadenas', () => {

  it('Debe regresar una cadena', () => {
    const mensaje = saludar('Jonathan');
    expect(typeof mensaje).toBe('string');
  });

});
