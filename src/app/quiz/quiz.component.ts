import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { question } from '../models/question';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  listQuestions: Array<question> = [];

  constructor( private _router: Router,
                private _quizService: QuizService ) { }

  ngOnInit(): void {
  }

}
