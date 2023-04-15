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
  }

  get flights(): FormArray {
    return this.form.get('flights') as FormArray;
  }

  newFlight(): FormGroup {
    return this.fb.group({
      name: ['',Validators.required],
      surname: ['',Validators.required],
      pnr: ['', Validators.required]
    });
  }

  addFlight() {
    this.flights.push(this.newFlight());
  }

  removeFlight(i: number) {
    this.flights.removeAt(i);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
