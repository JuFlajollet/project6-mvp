import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/core/models/registerRequest';
import { AuthService } from 'src/app/core/services/auth.service';
import { createPasswordValidator } from 'src/app/core/validators/createPasswordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public onError = false;

  public form = this.formBuilder.group({
    username: [
      '',
      [
        Validators.required,
        Validators.min(3),
        Validators.max(40)
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.min(8),
        Validators.max(120),
        createPasswordValidator()
      ]
  ]});

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  public submit(): void {
    const registerRequest = this.form.value as RegisterRequest;
    this.authService.register(registerRequest).subscribe({
      next: (_ : void) => this.router.navigate(['/login']),
      error: (_ : void) => this.onError = true,
    })
  }
}
