import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';

describe('Pruebas del component: MedicoComponent', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MedicoComponent]
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;

  });

  it('Se debe crear el component: MedicoComponent', () => {
  });

});
