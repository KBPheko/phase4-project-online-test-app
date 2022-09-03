import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  ContactObj: contact = new contact();
  constructor(private contactService: ContactService, private _router: Router ) { }

  ngOnInit(): void {
  }

  contactUs() {
    this.contactService.contactUs(this.ContactObj).subscribe(result => {
      console.log("result: " + result);
      alert("Thank you for contacting us, we will get back to you soon");
      this._router.navigate(['dashboard']);

    }, (error) => {
      console.log("error" + error)
    });
  }
}
