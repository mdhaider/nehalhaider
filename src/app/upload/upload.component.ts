import { Component, OnInit } from '@angular/core';

import { LearningsService } from '../learnings.service';
import { LearnRequest } from '../models/LearnRequest';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  req: LearnRequest= new LearnRequest("dfdf","dfdf", "fdfdf", 3);

  saveData(){
   
this.learning.saveLearnings(this.req).subscribe({
  next: (result: any) => {
    console.log(result);
  console.log("result",result);
  },
  error: (err: any) => {
  console.log(err);
  },
  complete: () => {
  console.log('complete');
  }
  });
}


  constructor(private learning: LearningsService){



  }


  ngOnInit(): void {
  }

}
