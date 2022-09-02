import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor( private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.userService.registerUser(this.user).subscribe(result => {
      console.log(result);
      console.log("Successfully registered!!");
      alert("Successfully registered!!");
      this.router.navigate(['/login']);

    }, (error) => { console.log('Some error occurred: '+error); });
  }

  login(){
    this.router.navigate(['/login']);
  }

}
