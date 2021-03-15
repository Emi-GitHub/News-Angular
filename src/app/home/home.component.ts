import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { NewsService } from '../news.service';
import { Store } from '@ngrx/store';
import { LoadNewsAction } from '../store/actions/news.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  news;
  landingNews = [];
  term;

  newsNgrx: Observable<any>;

  constructor(
    private newsApi: NewsService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.newsApi.landingNews().subscribe((response: any) => {
      this.landingNews = response.articles;
    });
    this.newsNgrx = this.store.select((store) => store.newsNgrx.list);
    this.store.dispatch(new LoadNewsAction());
  }

  onTerm(term: string) {
    this.term = term;
    this.newsApi.search(term).subscribe((response: any) => {
      this.news = response.articles;
      this.router.navigate(['/everything'], {
        queryParams: { news: JSON.stringify(this.news), term: this.term },
      });
    });
  }
}
