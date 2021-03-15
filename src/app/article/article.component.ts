import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public title;
  public image;
  public content;
  public description;
  public source;
  public author;
  public date;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let articleTitle = this.route.snapshot.queryParamMap.get('title');
    this.title = articleTitle;

    let articleImage = this.route.snapshot.queryParamMap.get('image');
    this.image = articleImage;

    let articleContent = this.route.snapshot.queryParamMap.get('content');
    this.content = articleContent;

    let articleDescription = this.route.snapshot.queryParamMap.get('description');
    this.description = articleDescription;

    let articleSource = this.route.snapshot.queryParamMap.get('source');
    this.source = articleSource;

    let articleAuthor = this.route.snapshot.queryParamMap.get('author');
    this.author = articleAuthor;

    let articleDate = this.route.snapshot.queryParamMap.get('date');
    this.date = new Date(articleDate);
  }

}
