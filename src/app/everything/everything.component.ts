import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.css']
})
export class EverythingComponent implements OnInit {
  public news;
  term;
  sort:string = 'relevance'

  constructor(private route: ActivatedRoute, private newsApi:NewsService, private router: Router) { }

  ngOnInit(): void {
    let articleNews = JSON.parse(this.route.snapshot.queryParamMap.get('news'));
    let term = this.route.snapshot.queryParamMap.get('term');
    this.term = term;
    this.news = articleNews;
  }

  onTerm(term: string) {
    this.term = term;
    this.newsApi.search(term).subscribe(
      (response:any) => {
        this.news = response.articles;
        this.router.navigate(['/everything'], {queryParams: {news:JSON.stringify(this.news)}})
      }
    )
  }

  onBackClick(){
      this.router.navigate(['/'])
  }

  onSortChange(sortValue: string) {
    this.newsApi.sortNews(this.term, sortValue).subscribe(
      (response:any) => {
        this.news = response.articles;
        console.log('term', this.term)
        console.log('sort', sortValue)
        console.log('news', response.articles);
        this.router.navigate(['/everything'], {queryParams: {news:JSON.stringify(this.news)}})
      }
    )
  }
}
