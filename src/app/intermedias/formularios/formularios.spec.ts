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

  it('El email debe ser obligatorio', () => {
    const control = componente.email;
    control.setValue('');
    expect(control.valid).toBeFalse();
  });

  it('El email debe ser un correo válido', () => {
    const control = componente.email;
    control.setValue('jonathan@gmail.com');
    expect(control.valid).toBeTruthy();
  });

  it('El password es obligatorio', () => {
    const control = componente.password;
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

});
