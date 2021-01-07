import { Component, OnInit } from '@angular/core';
import { LearningsService } from '../learnings/learnings.service';
import { LearnResponse } from '../../shared/LearnResponse';


@Component({
  selector: 'app-bits',
  templateUrl: './bits.component.html',
  styleUrls: ['./bits.component.scss']
})
export class BitsComponent implements OnInit {

  data: any;

  constructor(private learningService: LearningsService) {

  }

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

