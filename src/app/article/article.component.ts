import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title = this.route.snapshot.queryParamMap.get('title');
  term = this.route.snapshot.queryParamMap.get('term');
  sort = this.route.snapshot.queryParamMap.get('sort');
  rememberTerm = this.term;
  articles;

  image;
  content;
  description;
  source;
  author;
  date;

  constructor(private route: ActivatedRoute, private newsApi: NewsService) { }

  ngOnInit(): void {
    //this.rememberTerm = this.term;
    console.log('term in article', this.term)
    /*this.route.queryParams.subscribe((params) => {
      //this.title = atob(params.title)
      this.title = params.title
    })*/
    if (this.rememberTerm === null) {
      this.newsApi.landingNews().subscribe(
        (response: any) => {
          this.articles = response.articles;
          console.log('articles in first if', this.rememberTerm, this.articles)
          for (let i = 0; i < this.articles.length; i++) {
            if (this.articles[i].title === this.title) {
              this.image = this.articles[i].urlToImage;
              this.content = this.articles[i].content;
              this.description = this.articles[i].description;
              this.source = this.articles[i].source.name;
              this.author = this.articles[i].author;
              this.date = this.articles[i].publishedAt;
            }
          }
        }
      )
    }
    else if (this.rememberTerm !== null && this.sort === 'relevance') {
      this.newsApi.search(this.rememberTerm).subscribe(
        (response: any) => {
          this.articles = response.articles;
          console.log('articles in second if', this.rememberTerm, this.articles)
          for (let i = 0; i < this.articles.length; i++) {
            if (this.articles[i].title === this.title) {
              this.image = this.articles[i].urlToImage;
              this.content = this.articles[i].content;
              this.description = this.articles[i].description;
              this.source = this.articles[i].source.name;
              this.author = this.articles[i].author;
              this.date = this.articles[i].publishedAt;
            }
          }
        }
      )
    }
    else {
      this.newsApi.sortNews(this.rememberTerm, this.sort).subscribe(
        (response: any) => {
          this.articles = response.articles;
          console.log('articles in third if', this.rememberTerm, this.articles)
          for (let i = 0; i < this.articles.length; i++) {
            if (this.articles[i].title === this.title) {
              this.image = this.articles[i].urlToImage;
              this.content = this.articles[i].content;
              this.description = this.articles[i].description;
              this.source = this.articles[i].source.name;
              this.author = this.articles[i].author;
              this.date = this.articles[i].publishedAt;
            }
          }
        }
      )
    }
  }

}
