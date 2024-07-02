import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/core/models/session';
import { UpdateRequest } from 'src/app/core/models/updateRequest';
import { User } from 'src/app/core/models/user';
import { SessionService } from 'src/app/core/services/session.service';
import { UserService } from 'src/app/core/services/user.service';
import { createPasswordValidator } from 'src/app/core/validators/createPasswordValidator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  @Input()
  public user$: Observable<User> | undefined;

  public session: Session | undefined;
  public subscribe$: Observable<any> | undefined; //TODO: change once implemented
  public onError = false;

  public form: FormGroup = this.formBuilder.group({
    email: [
      '',
      [
        Validators.email
      ]
    ],
    username: [
      '',
      [
        Validators.min(3),
        Validators.max(40)
      ]
    ],
    password: [
      '',
      [
          Validators.min(8),
          Validators.max(120),
          createPasswordValidator()
      ]
    ]
  });

  constructor(private userService: UserService,
              private sessionService: SessionService,
              private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
    this.session = this.sessionService.session;
    if(this.session){
      this.user$ = this.userService.findById(this.session.id.toString());

      this.user$.subscribe((user: User) => {
        this.form.get('email')?.setValue(user.email);
        this.form.get('username')?.setValue(user.username);
      })
    }
  }

  public save(): void {
    const updateRequest = this.form.value as UpdateRequest;

    if(this.session){
      updateRequest.id = this.session.id.toString();

      if(updateRequest.email == ''){
        updateRequest.password = this.session.email;
      }
      if(updateRequest.username == ''){
        updateRequest.password = this.session.username;
      }
      if(updateRequest.password == ''){
        updateRequest.password = this.session.password;
      }

      if(this.user$){
        this.user$.subscribe((user: User) => {
          this.userService.update(user.id.toString(), updateRequest).subscribe({
            next: (_ : void) => this.matSnackBar.open("Votre profil a été mis à jour avec succès !", 'Close', { duration: 3000 }),
            error: (_ : void) => this.onError = true,
          });
        })
      }
    }
  }

  public disconnect(): void {
    this.sessionService.logOut();
    this.router.navigate(['/'])
  }
}
