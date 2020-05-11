import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MedicosService {

  constructor(public http: HttpClient) { }

  getMedicos() {
    return this.http.get('...').pipe(
      // tslint:disable-next-line: no-string-literal
      map(resp => resp['medicos'])
    );
  }

  agregarMedico(medico: any) {
    return this.http.post('...', medico).pipe(
      // tslint:disable-next-line: no-string-literal
      map(resp => resp['medico'])
    );
  }

  borrarMedico(id: string) {
    return this.http.delete('...').pipe(
      // tslint:disable-next-line: no-string-literal
      map(resp => resp['medico'])
    );
  }

}
