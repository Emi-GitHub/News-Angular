import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news;
  landingNews = []
  term;

  constructor(private newsApi: NewsService, private router: Router) { }

  ngOnInit() {
    console.log('term in home', this.term)
    this.newsApi.landingNews().subscribe(
      (response: any) => {
        this.landingNews = response.articles;
      }
    )
  }

  onTerm(term: string) {
    this.term = term;
    this.newsApi.search(term).subscribe(
      (response: any) => {
        this.news = response.articles;
        this.router.navigate(['/everything'], { queryParams: { news: JSON.stringify(this.news), term: this.term } })
      }
    )
  }

}
