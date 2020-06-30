import { IncrementadorComponent } from './incrementador.component';

describe('Pruebas unitarias del componente Incremendator', () => {

  let component: IncrementadorComponent;

  beforeEach(() => {
    component = new IncrementadorComponent();
  });

  it('El progreso debe aumentar en 5', () => {
    component.progreso = 50;
    component.cambiarValor(5);
    expect(component.progreso).toBe(55);
  });

});
