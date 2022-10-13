import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStore } from 'src/infra/AppStore';
import { TmdbService } from 'src/interfaces/tmdb/TmdbService';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit {
  protected popularMovies = [];
  protected responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 5,
      numScroll: 1,
    },
  ];

  constructor(
    protected appStore: AppStore,
    private tmdbService: TmdbService,
    private router: Router
  ) {}

  async ngOnInit() {
    if (!this.appStore.popularMovies.length) {
      const { results: popularMovies } =
        await this.tmdbService.getMostPopularMovies();
      this.appStore.popularMovies = popularMovies;
    }
  }

  showDetailsPage(selectedMovie: { [key: string]: any }) {
    const { id } = selectedMovie;

    this.appStore.selectedMovie = selectedMovie;
    this.router.navigateByUrl(`/details/${id}`);
  }
}
