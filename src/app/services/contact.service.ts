import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private _httpService: HttpClient) { }

  contactUs(contactUsObj: contact): Observable<contact> {
    return this._httpService.post<contact>("http://localhost:3000/contacts/", contactUsObj);
  }
}
