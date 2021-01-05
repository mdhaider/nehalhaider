import { Component, OnInit } from '@angular/core';
import { LearningsService } from '../learnings.service';
import { LearnResponse } from '../models/LearnResponse';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.scss']
})
export class LearningsComponent implements OnInit {

  data:any;

  title = 'Card View Demo';

  gridColumns = 5;
  url:string="";
  name:string=""

  grid() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  goToDownload(i:any) {
    this.data[0].docFile.url;
    console.log(this.data[i].docFile.url);
  }
 
  downloadPdf(i:any) {
    //const pdfUrl = './assets/sample.pdf';
    //const pdfName = 'your_pdf_file';
    this.url=this.data[i].docFile.url
    this.name=this.data[i].docFile.name
    FileSaver.saveAs(this.url, this.name);
  }

  openDoc(i:any) {
    this.url=this.data[i].docFile.url
    this.name=this.data[i].docFile.name
    window.open(this.url + '#page=' + this.name, '_blank', '', true);
  }


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
