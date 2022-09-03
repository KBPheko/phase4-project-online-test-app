import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  id:any;
  user:User = new User();

  constructor( private router:Router, private userService:UserService, activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
