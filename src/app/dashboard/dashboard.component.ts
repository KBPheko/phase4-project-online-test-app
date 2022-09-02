import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  f1:boolean = true;
  f2:boolean = false;
  f3:boolean = false;
  name:string="Start Quiz";

  user: string = "";

  constructor() { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("user");
    if(obj != null) {
      this.user = obj;
    }
  }


  begin(){
    //this.f1=false;
    if(this.f2){
      this.f1=true;
      this.name="Begin";
    } else {
      this.name="Cancel";
      this.f1=false;
      this.f2=true;
    }
  }
}
