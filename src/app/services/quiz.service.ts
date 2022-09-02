import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  //Get quizes by ID

  //Typescript
  getAllTSQuestions(): Observable<Test>{
    return this.http.get<Test[]>('http://localhost:3000/quiz/1');
  }

  constructor( private http: HttpClient) { }
}
