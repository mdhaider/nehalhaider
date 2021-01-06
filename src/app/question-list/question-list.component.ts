import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../interview.service';
import { InterviewResponse } from '../models/InterviewResponse';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {


  data:any;

  title = 'Card View Demo';

  gridColumns = 5;
  url:string="";
  name:string=""

  constructor(private interviewService: InterviewService) { }

  ngOnInit(): void {

    this.interviewService.getInterViewQuestions().subscribe({
      next: (result: any) => {
        let res = new InterviewResponse(result)
        this.data = res.results
        console.log("learnings", result);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });

  }

}
