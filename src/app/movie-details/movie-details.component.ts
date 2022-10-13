import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStore } from 'src/infra/AppStore';
import { ImdbService } from 'src/interfaces/imdb/ImdbService';
import { TmdbService } from 'src/interfaces/tmdb/TmdbService';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  protected trailer = '';
  protected loading = false;
  constructor(
    protected appStore: AppStore,
    private activatedRoute: ActivatedRoute,
    private tmdbService: TmdbService,
    private imdbService: ImdbService
  ) {}

  async ngOnInit() {
    this.loading = true
    const tmdbMovieId = Number(this.activatedRoute.snapshot.paramMap.get('movieId'))
    const imdbId = await this.getImdbMovieIdByTmdbMovieId(tmdbMovieId);
    const { items: movieImages } = await this.imdbService.getMovieImages(
      imdbId
    );

    const { results: videos } = await this.tmdbService.getMovieTrailer(
      tmdbMovieId
    );
    
    this.trailer = `https://www.youtube.com/embed/${videos[0].key}?autoplay=0&showinfo=0&controls=0"`;

    this.appStore.selectedMovie = await this.tmdbService.getMovieDetailsById(tmdbMovieId)
    this.loading = false;
  }

  async getImdbMovieIdByTmdbMovieId(tmdbMovieId: number): Promise<string> {
    const { imdb_id } = await this.tmdbService.getMovieDetailsById(tmdbMovieId);
    return imdb_id;
  }
}
