import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/core/models/loginRequest';
import { Session } from 'src/app/core/models/session';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public onError: boolean = false;
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
        Validators.min(8),
        Validators.max(40)
      ]
  ]});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  public back(): void {
    window.history.back();
  }

  public submit(): void {
    const loginRequest = this.form.value as LoginRequest;
    this.authService.login(loginRequest).subscribe({
      next: (response: Session) => {
        this.sessionService.logIn(response);
        this.router.navigate(['/']);
      },
      error: (_: void) => this.onError = true,
    });
  }
}
