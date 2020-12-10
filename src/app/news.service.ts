import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  public search(term:string) {
    return this.http.get(`http://newsapi.org/v2/everything?q=${term}&apiKey=a658486670cd42d2bb54aff0add77802`)
  }

  public landingNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a658486670cd42d2bb54aff0add77802')
  }

  public sortNews(term:string, sort:string) {
    return this.http.get(`http://newsapi.org/v2/everything?q=${term}&sortBy=${sort}&apiKey=a658486670cd42d2bb54aff0add77802`)
  }
}
