import { FormGroup, FormControl, Validators } from '@angular/forms'

export class FormularioRegister {

  email = new FormControl('');
  password = new FormControl('');

  form = new FormGroup({
    email: this.email,
    password: this.password
  });

  constructor() {
    this.setValidators();
  }

  setValidators() {
    this.email.setValidators([
      Validators.required,
      Validators.email
    ]);
    this.password.setValidators([
      Validators.required
    ]);
  }

}
