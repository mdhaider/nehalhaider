import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InterviewRequest } from '../app/models/InterviewRequest';

const httpHeaders = new HttpHeaders({
  'content-type': 'application/json',
  'X-Parse-Application-Id': 'uuPgBpW07aSSlSRKl05I5RYPsTHQ4cQ5EjU4qDMT',
  'X-Parse-REST-API-Key': '2oPCAkKVjMjl703GO3kxMMbP5RGncOGHXNNWdNJY',
});


@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  url: string = 'https://parseapi.back4app.com/classes/InterView';

  getInterViewQuestions() {
    return this.httpClient.get(this.url, { headers: httpHeaders });
  }

  saveInterViewQuestions(req: InterviewRequest) {
    return this.httpClient.post(this.url, req, { headers: httpHeaders });
  }

  constructor(private httpClient: HttpClient) { }
}
