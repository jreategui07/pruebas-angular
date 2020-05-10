import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {

  it('Debe retornar true', () => {
    const resp = usuarioIngresado();
    expect(resp).toBeTrue();
  });

  it('No debe ser falso', () => {
    const resp = usuarioIngresado();
    expect(resp).not.toBeFalsy();
  });

});
