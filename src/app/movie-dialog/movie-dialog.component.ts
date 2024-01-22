import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStore } from 'src/infra/AppStore';
import { ImdbService } from 'src/interfaces/imdb/ImdbService';
import { TmdbService } from 'src/interfaces/tmdb/TmdbService';
import { MovieDetails } from 'src/interfaces/types/DialogMovieDetails';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css'],
})
export class MovieDialogComponent implements OnInit {
  @Input() displayResponsiveDialog = false;
  protected movieDetails: MovieDetails = {
    id: 0,
    title: '',
    images: [],
  };
  protected title: string = '';
  protected trailer = '';
  protected showGalleria = false;
  protected responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '960px',
      numVisible: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(
    private tmdbService: TmdbService,
    private imdbService: ImdbService,
    protected appStore: AppStore,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  async showResponsiveDialog(selectedMovie: MovieDetails) {
    this.displayResponsiveDialog = true;
    this.movieDetails = selectedMovie;
    const { id: tmdbMovieId } = selectedMovie;
    const imdbId = await this.getImdbMovieIdByTmdbMovieId(tmdbMovieId);
    const { items: movieImages } = await this.imdbService.getMovieImages(
      imdbId
    );

    const { results: videos } = await this.tmdbService.getMovieTrailer(
      tmdbMovieId
    );
    this.trailer = `https://www.youtube.com/embed/${videos[0].key}`;

    if (movieImages) {
      movieImages.length = 5;
      this.movieDetails.images = movieImages.map(
        (movieImage: { image: string }) => {
          return movieImage.image.replace('original', '500x300');
        }
      );
    }

    this.showGalleria = true;
  }

  async getImdbMovieIdByTmdbMovieId(tmdbMovieId: number): Promise<string> {
    const { imdb_id } = await this.tmdbService.getMovieDetailsById(tmdbMovieId);
    return imdb_id;
  }
}
