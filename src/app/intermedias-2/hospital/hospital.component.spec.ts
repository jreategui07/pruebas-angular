import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HospitalComponent } from './hospital.component';

describe('Pruebas del componente: HospitalComponent', () => {

  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  /* beforeEach(async(() => {
    // async: es usado para indicarle al beforeEach que se espere a que el callback termine de ejecutarse
    // el async es implementado debido a que accesar al filesystem para obtener los archivos dependientes como el ".html" puede tardar unos nanosegundos, por lo cual no es instantaneo
    // no obstante, actualmente el Angular CLI trabaja con Webpack y el ".html" y ".ts" están en el mismo archivo
    // por lo cual el async no sería necesario
    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    })
    .compileComponents(); // compileComponents tampoco es necesario, ya que al trabajar con Webpack tenemos los archivos ".html" y ".ts" en el mismo lugar
  })); */

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    });
    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // fixture.detectChanges ejecuta el ciclo de detacción de cambios de angular
  });

  it('Se debe crear el componente HospitalComponent', () => {
    expect(component).toBeTruthy();
  });

});
