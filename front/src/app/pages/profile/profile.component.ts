import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { TopicService } from 'src/app/core/services/topic.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  @Input()
  public user$: Observable<any> | undefined;

  public subscribe$: Observable<any> | undefined; //TODO: change once implemented

  public form: FormGroup = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    username: [
      '',
      [
        Validators.required,
        Validators.min(3),
        Validators.max(40)
      ]
    ]
  });

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
    //TODO: get id from session service instead
    this.user$ = this.userService.findById('1');
  }

  public save(): void {
    //TODO: get id from session service instead
    if(this.user$ instanceof User){
      this.userService.update('1', this.user$).subscribe((_) =>  
        this.matSnackBar.open("Votre profil a été mis à jour avec succès !", 'Close', { duration: 3000 })
      );
    }
  }

  public disconnect(): void {
    //TODO: call service for proper logout
    this.router.navigate(['/'])
  }
}
