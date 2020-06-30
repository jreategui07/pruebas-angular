import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
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

});
