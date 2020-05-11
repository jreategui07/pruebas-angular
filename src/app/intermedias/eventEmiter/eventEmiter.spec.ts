import { Jugador2 } from './eventEmiter';

describe('Pruebas de EventEmiter', () => {

    let jugador: Jugador2;

    beforeEach(() => {
        jugador = new Jugador2();
    });

    it('Debe de emitir un evento cuando recibe daño', () => {
        let nuevoHp = 0;
        jugador.hpCambia.subscribe(hp => {
            nuevoHp = hp;
        });
        jugador.recibeDanio(200);
        expect(nuevoHp).toBe(0);
    });

    it('Debe emitir un evento cuando recibe daño, y sobrevivir', () => {
       let nuevoHp = 0;
       jugador.hpCambia.subscribe(hp => {
           nuevoHp = hp;
       });
       jugador.recibeDanio(50);
       expect(nuevoHp).toBe(50);
    });

    it('Debe emitir un saludo con el nombre proporcionado', () => {
        let saludo = '';
        jugador.saludo.subscribe(resp => {
            saludo = resp;
        });
        const nombre = 'Jonathan';
        jugador.saludar(nombre);
        expect(saludo).toContain(nombre);
    });

    it('Debe emitir un evento con el poder principal', () => {
        let poderPrincipal = '';
        jugador.poderPrincipal.subscribe(resp => {
            poderPrincipal = resp;
        });
        jugador.obtenerProderPrincipal();
        expect(poderPrincipal).toBe('aire');
    });

});
