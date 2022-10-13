import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AppStore } from 'src/infra/AppStore'

@Component({
  selector: 'app-search-movie-results',
  templateUrl: './search-movie-results.component.html',
  styleUrls: ['./search-movie-results.component.css'],
})
export class SearchMovieResultsComponent implements OnInit {
  constructor(protected appStore: AppStore, private router: Router) {}

  ngOnInit(): void {}

  showDetailsPage(selectedMovie: { [key: string]: any }) {
    this.appStore.searchMovieTitle = ''
    const { id } = selectedMovie

    this.appStore.selectedMovie = selectedMovie
    this.router.navigateByUrl(`/details/${id}`)
  }
}
