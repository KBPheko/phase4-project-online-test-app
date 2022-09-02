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
  getAllTSQuestions(): Observable<Test[]>{
    return this.http.get<Test[]>('http://localhost:3000/questions');
  }
  //Javascript
  getAllJSQuestions() : Observable<Test[]>{
    return this.http.get<Test[]>('http://localhost:3000/quiz');
  }
  //Angular
  getAllAngQuestions() : Observable<Test[]>{
    return this.http.get<Test[]>('http://localhost:3000/quiz');
  }
  //Cyber-security
  getAllCSQuestions() : Observable<Test[]>{
    return this.http.get<Test[]>('http://localhost:3000/quiz');
  }

  getAll(){
    return [
      { id: 'data/typescript.json', name: 'Typescript'},
      { id: 'data/data.json', name: 'Javascript'},
      { id: 'data/data.json', name: 'Angular'},
      { id: 'data/data.json', name: 'Cyber-Security'}
    ]
  }

  get(url: string){
    return this.http.get(url);
  }

  constructor( private http: HttpClient) { }
}
