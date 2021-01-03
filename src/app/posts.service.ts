import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url:string="https://raw.githubusercontent.com/mdhaider/learningfiles/main/learningfiles.json";

  constructor(private http:HttpClient) { 
  
  }

  getPosts(){
    return this.http.get(this.url);
  }
}
