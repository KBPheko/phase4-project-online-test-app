import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { questions } from '../models/questions';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  listQuestions: Array<questions> = [];

  constructor( private _router: Router,
                private _quizService: QuizService ) { }

  ngOnInit(): void {
  }

}
