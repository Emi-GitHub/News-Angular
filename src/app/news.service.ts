import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  public search(term:string) {
    return this.http.get(`http://newsapi.org/v2/everything?q=${term}&apiKey=a9c0ed9d6b6e492db95b5b87b686b064`)
  }

  public landingNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a9c0ed9d6b6e492db95b5b87b686b064')
  }

  public sortNews(term:string, sort:string) {
    return this.http.get(`http://newsapi.org/v2/everything?q=${term}&sortBy=${sort}&apiKey=a9c0ed9d6b6e492db95b5b87b686b064`)
  }
}
