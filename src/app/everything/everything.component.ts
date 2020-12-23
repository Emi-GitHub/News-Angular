import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.css']
})
export class EverythingComponent implements OnInit {
  public news = JSON.parse(this.route.snapshot.queryParamMap.get('news'));
  term = this.route.snapshot.queryParamMap.get('term');
  sort: string = 'relevance'

  constructor(private route: ActivatedRoute, private newsApi: NewsService, private router: Router) { }

  ngOnInit(): void {
    //let articleNews = JSON.parse(this.route.snapshot.queryParamMap.get('news'));
    //let term = this.route.snapshot.queryParamMap.get('term');
    //this.term = term;
    //this.news = articleNews;
    console.log('term in everything:', this.term)
  }

  onTerm(term: string) {
    this.term = term;
    this.newsApi.search(term).subscribe(
      (response: any) => {
        this.news = response.articles;
        this.router.navigate(['/everything'], { queryParams: { news: JSON.stringify(this.news) } })
      }
    )
  }

  onBackClick() {
    this.router.navigate(['/'])
  }

  onSortChange(sortValue: string, term: string) {
    this.term = term;
    console.log('term onSortChange before api', this.term)
    this.newsApi.sortNews(term, sortValue).subscribe(
      (response: any) => {
        this.news = response.articles;
        this.router.navigate(['/everything'], { queryParams: { news: JSON.stringify(this.news) } })
        console.log('term onSortChange after api', this.term)
      }
    )
  }

  onSortClick() {
    console.log('on sort click', this.term)
  }
}
