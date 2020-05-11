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

});
