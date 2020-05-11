import { FormularioRegister } from './formularios';

describe('Pruebas de formularios', () => {

  let componente: FormularioRegister;

  beforeEach(() => {
    componente = new FormularioRegister();
  });

  it('Debe crear un formulario con dos campos', () => {
    expect(componente.form.contains('email')).toBeTrue();
    expect(componente.form.contains('password')).toBeTrue();
  });

});
