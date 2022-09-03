import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/app';
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
    return this.http.get<Test[]>('http://localhost:3000/jsquestions');
  }
  //Angular
  getAllAngQuestions() : Observable<Test[]>{
    return this.http.get<Test[]>('http://localhost:3000/angquestions');
  }
  //Cyber-security
  getAllCSQuestions() : Observable<Test[]>{
    return this.http.get<Test[]>('http://localhost:3000/csquestions');
  }

  getAll(){
    return [
      { id: 'data/angular.json', name: 'Angular'},
      { id: 'data/cybersecurity.json', name: 'Cyber-Security'},
      { id: 'data/typescript.json', name: 'Typescript'},
      { id: 'data/javascipt.json', name: 'Javascript'}
    ]
  }

  get(url: string){
    return this.http.get(url);
  }

  constructor( private http: HttpClient) { }
}
