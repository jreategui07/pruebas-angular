import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty } from 'rxjs';

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

});
