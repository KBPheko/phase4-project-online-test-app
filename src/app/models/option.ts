export class Option {
    id: number;
    questionId: number;
    name: string;
    isCorrect: boolean;
    selected: boolean = false;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isCorrect = data.isAnswer;
    }
}
