import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../services/auth.guard';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title = 'Quizzes & Trivia';

  loggedIn: boolean = false;

  constructor( private _authGuard: AuthGuard) { }

  ngOnInit(): void {
    if(this._authGuard.isLoggedIn()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout(){
    this._authGuard.logout();
  }

}
