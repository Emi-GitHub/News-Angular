import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @Input() landingNews = [];
  @Input() term;
  @Input() sort;
  loadMore: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('term in landing page', this.term)
  }

  onArticleSelect(title) {
    //this.router.navigate(['/article'], { queryParams: { title: btoa(title) } })
    this.router.navigate(['/article'], { queryParams: { title: title, term: this.term, sort: this.sort } })
  }

  onLoadMoreButtonClicked() {
    this.loadMore = true
  }
}
