import { Component, OnInit } from '@angular/core';
import { AppStore } from 'src/infra/AppStore';

@Component({
  selector: 'app-search-movie-results',
  templateUrl: './search-movie-results.component.html',
  styleUrls: ['./search-movie-results.component.css']
})
export class SearchMovieResultsComponent implements OnInit {

  constructor(protected appStore: AppStore) { }

  ngOnInit(): void {
  }
}
