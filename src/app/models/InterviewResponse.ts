import { QuestionsList } from "./QuestionsList";

export class InterviewResponse {
    results: QuestionsList[];

    constructor(res:any){
        this.results= res.results;
    }
}