import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.scss']
})
export class LearningsComponent implements OnInit {

  data:any;
 
//   afuConfig = {
//     uploadAPI: {
//       url:"https://example-file-upload-api"
//     }
// };

  constructor(private posts:PostsService) { }

  ngOnInit(): void {
    this.posts.getPosts().subscribe({
      next: (result: any) => {
        this.data=result;
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

}
