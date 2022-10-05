import { observable } from 'mobx';
import { TmdbConfiguration } from 'src/interfaces/types/TmdbConfiguration';

export class AppStore {
  @observable movieDetails = [];
  @observable trailer = '';
  @observable tmdbConfiguration: TmdbConfiguration = {
    images: { secure_base_url: '' },
  };
  @observable popularMovies = [];
  @observable show = false;
  @observable searchMovieTitle = '';
  @observable searchMovieResults: Array<any> = [];
  @observable searchingMovie = false;
  @observable selectedMovie: { [key: string]: any } = {};
}
