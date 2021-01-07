import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LearnRequest } from '../../shared/LearnRequest';

const httpHeaders = new HttpHeaders({
  'content-type': 'application/json',
  'X-Parse-Application-Id': 'uuPgBpW07aSSlSRKl05I5RYPsTHQ4cQ5EjU4qDMT',
  'X-Parse-REST-API-Key': '2oPCAkKVjMjl703GO3kxMMbP5RGncOGHXNNWdNJY',
});

@Injectable({
  providedIn: 'root',
})
export class LearningsService {
  url: string = 'https://parseapi.back4app.com/classes/Learnings';

  getLearnings() {
    return this.httpClient.get(this.url, { headers: httpHeaders });
  }

  saveLearnings(req: LearnRequest) {
    return this.httpClient.post(this.url, req, { headers: httpHeaders });
  }

  constructor(private httpClient: HttpClient) {}
}
