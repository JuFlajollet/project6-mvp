import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public passwordVisible: boolean = true;

  public form = this.formBuilder.group({
    login: [
      '',
      [
        Validators.required
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.min(8)
      ]
  ]});

  constructor(private formBuilder: FormBuilder) {
  }

  public submit(): void {
    // TODO implement submit method
  }
}
