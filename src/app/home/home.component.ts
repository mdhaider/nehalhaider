import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any;
 
//   afuConfig = {
//     uploadAPI: {
//       url:"https://example-file-upload-api"
//     }
// };

  constructor(private posts:PostsService) { }

  ngOnInit() {
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
