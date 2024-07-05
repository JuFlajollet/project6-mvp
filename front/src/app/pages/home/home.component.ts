import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/core/models/session';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  session!: Session;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.session = this.sessionService.session!;
  }

  public $isLogged(): Observable<boolean> {
    return this.sessionService.$isLogged();
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  register() {
    this.router.navigateByUrl('/register');
  }
}
