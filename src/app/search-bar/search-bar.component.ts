import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term = '';
  news = []
  showEverything: boolean = false;
  @Output() submitted = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term)
    this.showEverything = true;
  }

  onSearchSubmit() {
    this.showEverything = true;
  }

}
