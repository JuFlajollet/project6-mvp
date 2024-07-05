import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/core/models/session';
import { Topic } from 'src/app/core/models/topic';
import { UpdateRequest } from 'src/app/core/models/updateRequest';
import { User } from 'src/app/core/models/user';
import { SessionService } from 'src/app/core/services/session.service';
import { TopicService } from 'src/app/core/services/topic.service';
import { UserService } from 'src/app/core/services/user.service';
import { createPasswordValidator } from 'src/app/core/validators/createPasswordValidator';
import { TopicsModule } from 'src/app/features/topics/topics.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  public user$: Observable<User>;
  public subscribedTopics$: Observable<Topic[]>;

  public session: Session;
  public userId: number;
  public passwordVisible: boolean = true;
  public onError = false;
  public topicSubscriptions = new Map<number, boolean>();

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
              private topicService: TopicService,
              private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar,
              private router: Router) {
    this.session = this.sessionService.session!;
    this.userId = this.session.id;
    this.user$ = this.userService.findById(this.userId.toString());
    this.subscribedTopics$ = this.topicService.findAllSubscribedTopicsByUserId(this.userId.toString());
  }

  ngOnInit(): void {
    this.user$.subscribe((user: User) => {
      this.form.get('email')?.setValue(user.email);
      this.form.get('username')?.setValue(user.username);
    })
    this.fetchTopics();
  }

  public save(): void {
    const updateRequest = this.form.value as UpdateRequest;
    updateRequest.id = this.userId.toString();

    if(updateRequest.email == ''){
      updateRequest.password = this.session.email;
    }
    if(updateRequest.username == ''){
      updateRequest.password = this.session.username;
    }
    if(updateRequest.password == ''){
      updateRequest.password = this.session.password;
    }
      
    this.user$.subscribe((user: User) => {
      this.userService.update(user.id.toString(), updateRequest).subscribe({
        next: (_ : void) => this.matSnackBar.open("Votre profil a été mis à jour avec succès !", 'Close', { duration: 3000 }),
        error: (_ : void) => this.onError = true,
      });
    })
  }

  public disconnect(): void {
    this.sessionService.logOut();
    this.router.navigate(['/'])
  }

  public onUnsubscribe(topicId: number): void {
    this.topicService.unsubscribeTopic(topicId.toString(), this.userId.toString()).subscribe(_ => this.fetchTopics());
  }

  private fetchTopics(): void {
    this.subscribedTopics$ = this.topicService.findAllSubscribedTopicsByUserId(this.userId.toString());
    this.subscribedTopics$.subscribe((topics: Topic[]) => {
      topics.forEach((topic: Topic) => {
        this.topicSubscriptions.set(topic.id, true);
      })
    });
  }
}
