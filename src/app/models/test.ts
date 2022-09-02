import { QuizConfig } from "./quiz-configuration";
import { question } from "./question";

export class Test {
  id: number = 0 ;
  name: string = '';
  description: string = '';
  config!: QuizConfig;
  questions: Array<question> = [];

  constructor(data: any){
    if(data){
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.config = new QuizConfig(data.config);
        data.questions.forEach((q:any) => {
            this.questions.push(new question(q));
        });
      }
}
}
