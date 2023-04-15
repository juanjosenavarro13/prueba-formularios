import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      flights: this.fb.array([]),
    });

    this.addFlight('madrid', 'bilbao', 'pepe', 'alvarez', '33ga6');
    this.addFlight('sevilla', 'barcelona', 'antonio', 'suarez', '53ga6');
  }

  get flights(): FormArray {
    return this.form.get('flights') as FormArray;
  }

  private newFlight(ida:string = '', vuelta:string = '', name:string = '', surname:string = '', pnr:string = ''): FormGroup {
    return this.fb.group({
      ida: [ida],
      vuelta: [vuelta],
      name: [name,Validators.required],
      surname: [surname,Validators.required],
      pnr: [pnr, Validators.required]
    });
  }

  addFlight(ida:string = '', vuelta:string = '', name:string = '', surname:string = '', pnr:string = '') {
    this.flights.push(this.newFlight(ida, vuelta, name, surname, pnr));
  }

  removeFlight(i: number) {
    this.flights.removeAt(i);
  }

  onSubmit() {
    console.log('submit',this.form.value);
  }

  sendFlight(flight:any) {
    console.log('send',flight)
  }
}
