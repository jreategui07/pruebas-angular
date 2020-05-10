import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {

  it('Debe retornar true', () => {
    const resp = usuarioIngresado();
    expect(resp).toBeTrue();
  });

});
