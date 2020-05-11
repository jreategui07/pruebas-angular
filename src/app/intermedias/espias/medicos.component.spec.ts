import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Se deben cargar los médicos', () => {
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from(['medico1', 'medico2', 'medico3']);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('agregarMedico: Se debe llamar al servidor para agregar un médido', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => {
      // tslint:disable-next-line: deprecation
      return empty();
    });
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('agregarMedico: Debe agregar un nuevo médico al arreglo de médicos si la respuesta es exitosa', () => {
    const medico = { id: 1, nombre: 'Jonathan' };
    spyOn(servicio, 'agregarMedico').and.returnValue(
      from([medico])
    );
    componente.agregarMedico();
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('agregarMedico: Si falla la adición, el mensaje de error debe de ser igual al error del servicio', () => {
    const mensajeError = 'No se pudo agregar el médico';
    spyOn(servicio, 'agregarMedico').and.callFake(() => {
      return throwError(mensajeError);
    });
    componente.agregarMedico();
    expect(componente.mensajeError).toBe(mensajeError);
  });

  it('borrarMedico: Debe de llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    // tslint:disable-next-line: deprecation
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());
    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('borrarMedico: NO debe de llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    // tslint:disable-next-line: deprecation
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());
    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });

});
