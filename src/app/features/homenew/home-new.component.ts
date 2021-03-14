import { Component, OnInit } from '@angular/core';
import { LearningsService } from '../learnings/learnings.service';
import { LearnResponse } from 'src/app/shared/LearnResponse';

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.scss']
})
export class HomeNewComponent implements OnInit {
  data:any;

  title = 'Card View Demo';

  gridColumns = 5;
  url:string="";
  name:string=""

  constructor(private learningService: LearningsService) { }

  ngOnInit(): void {

    this.learningService.getLearnings().subscribe({
      next: (result: any) => {
        let res = new LearnResponse(result)
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