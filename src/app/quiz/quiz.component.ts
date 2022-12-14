import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { Option, question, Test, QuizConfig } from '../models/app';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {

  //listQuestions: Array<question> = [];
  quizes: any[] = [];
  quiz: Test = new Test(null);
  mode = 'quiz';
  quizName: string = '';
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question when answered.
    'duration': 180,  // indicates the time (in secs) in which the test needs to be finished
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager ={
    index:0,
    size: 1,
    count: 1
  };

  timer: any = null;
  startTime: Date = new Date();
  endTime: Date = new Date();
  ellapsedTime = '00:00';
  duration = '';
  id: any;

  constructor( private _router: Router,
                private _quizService: QuizService ) { }

  ngOnInit(): void {

    this.quizes = this._quizService.getAll(); //fetches all quizes from quiz service
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);

  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  isAnswered(question: question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: question) {
    return question.options.every(x => x.selected === x.isCorrect) ? 'correct' : 'wrong';
  };

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  onSelect(question: question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }


  goBack(){
    this._router.navigate(['./dashboard']);
  }

  onSubmit(){
    let answers = [];
    this.quiz.questions.forEach(i => answers.push({ 'testId': this.id , 'questionId': i.id, 'answered': i.answered}));

    alert('Press ok to submit quiz')
    console.log(this.quiz.questions);
    this.mode = 'result';
  }

  loadQuiz(quizName: string) {
    this._quizService.get(quizName).subscribe(res => {
      this.quiz = new Test(res);
      this.pager.count = this.quiz.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'quiz';
  }

}
