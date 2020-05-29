import { saludar } from './strings';

describe('Prueba de cadenas', () => {

  it('Debe regresar una cadena', () => {
    const resp = saludar('Jonathan');
    expect(typeof resp).toBe('string');
  });

  it('Debe contener el nombre enviado', () => {
    const nombre = 'Jonathan';
    const resp = saludar(nombre);
    expect(resp).toContain(nombre);
  });

});
