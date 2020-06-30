import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Pruebas de integración del componente Incremendator', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  });

  it('Se debe crear el componenten IncrementadorComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Se debe mostrar la leyenda', () => {
    const leyendaPrueba = 'Progreso de carga';
    component.leyenda = leyendaPrueba;
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain(leyendaPrueba);
  });

  it('Debe de mostrar en el input el valor del progreso', async(() => { // async, debido al comportamiento asíncrono de whenStable, es necesario implementar async para detectar el expect dentro del whenStable
    component.cambiarValor(5);
    fixture.detectChanges(); // ejecutamos el ciclo de detección de cambios
    fixture.whenStable().then(() => { // fixture.whenStable nos permite esperar a que fixture.detectChanges termine de ejecutarse
      const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      expect(input.value).toBe('55');
    });
  }));

  it('Debe incrementar/decrementar en 5 con un click en el botón', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary')); // queryAll, usamos queryAll para obtener todos los valores que cohincidan con el valor especificado
    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);
    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('Debe decrementar el valor del progreso a 45', async(() => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
      expect(elem.innerHTML).toContain('45');
    });
  }));

  it('Debe incrementar el valor del progreso a 55', async(() => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
      expect(elem.innerHTML).toContain('55');
    });
  }));

});
