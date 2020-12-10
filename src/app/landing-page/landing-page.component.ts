import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @Input() landingNews = [];
  loadMore : boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onArticleSelect(title, image, content, description, source, author, date){
    this.router.navigate(['/article'], {queryParams: {title:title, image:image, content:content, description:description, source:source, author:author, date:date}})
  }

  onLoadMoreButtonClicked(){
    this.loadMore = true
  }
}
