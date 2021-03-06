import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicosService } from '../../intermedias/espias/medicos.service';
import { HttpClientModule } from '@angular/common/http';

// TestBed: Es una clase que contiene un conjunto de métodos y funciones que nos van a permitir realizar pruebas de elementos y componentes de Angular

describe('Pruebas del component: MedicoComponent', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({ // configureTestingModule: Nos permite definir un módulo donde declararemos los elementos necesarios para hacer trabajar nuestro componente
      declarations: [MedicoComponent],
      providers: [MedicosService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(MedicoComponent); // createComponent: Nos permite crear un compoente ya proocesado y compilado por el testbed. TestBed.createComponent, nos devuelve un fixture eu cual nos va a permitir tener acceso al html, componentes del dom, entre otros
    component = fixture.componentInstance; // fixture.componentInstance: Nos permite tener acceso a la instancia del componente

  });

  it('Se debe crear el component: MedicoComponent', () => {
    expect(component).toBeTruthy();
  });

  it('saludarMedico: Debe retornar un saludo con el nombre enviado', () => {
    const nombre = 'Jonathan';
    const resp = component.saludarMedico(nombre);
    expect(resp).toContain(nombre);
  });

});
