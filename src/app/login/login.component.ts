import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  userList: Array<User> = [];

  constructor( private router: Router, private _userService: UserService ) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(result => {
      console.log(result);
      this.userList = result;
    }, (error) => { error })
  }

  //second attempt
  login(){
    this._userService.getUsers().subscribe(result => {
      console.log(result);
      this.userList = result;
      for(let i = 0; i < this.userList.length; i++) {
        if(this.userList[i].email == this.user.email){
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('user', this.user.email);
          alert('You are logged in!');
          this.router.navigate(['dashboard']);
        }
      }
    })
  }

  //first attempt
  checkForUser(): Boolean {
    let blnFound = false;

    for (var User of this.userList) {

      if (User.email === this.user.email && User.password === this.user.password) {

        blnFound = true;

        return true;
      }
    }
    return false;
  }

  signIn() {
    let blnFound = this.checkForUser();
    if (blnFound == true) {
      if ((this.user.email == "user@gmail.com") && (this.user.password) == "123") {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('user', "true");
        this.router.navigate(["/dashboard"]);
        return;
      }
      alert('Congrats, You have been successfully logged in!');

      console.log("username is" + this.user.email + ' password is ' + this.user.password);
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('user', "true");
      this.router.navigate(["/dashboard"]);
    }
    else {
      alert('Invalid credentials, please try again');
      this.router.navigate(["/login"]);
    }
  }


  register(){
    this.router.navigate(["/register"]);
  }

}
