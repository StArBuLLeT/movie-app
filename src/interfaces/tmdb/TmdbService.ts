import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { takeUntil } from 'rxjs/operators';
import { firstValueFrom, Observable, Subject } from 'rxjs';
import {
  HttpErrorHandler,
  HandleError,
} from 'src/app/http-error-handler.service';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  params: {
    api_key: 'eb976ed55c7b356c737a2a4b35e8d70b',
    language: 'en-US',
  },
};

@Injectable()
export class TmdbService {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  private basePath = 'https://api.themoviedb.org/3';
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  getConfiguration(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.basePath}/configuration`, httpOptions)
    );
  }

  getMostPopularMovies(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.basePath}/movie/popular`, httpOptions)
    );
  }

  getMovieDetailsById(movieId: number): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.basePath}/movie/${movieId}`, httpOptions)
    );
  }

  searchMovie(searchValue: string): Observable<any> {
    const { params: httpParams } = httpOptions;

    const newHttpOptions = {
      ...httpOptions,
      params: { ...httpParams, query: searchValue, include_adult: true },
    };

    return this.http
      .get(`${this.basePath}/search/movie`, newHttpOptions)
      .pipe(takeUntil(this.ngUnsubscribe));
  }

  getMovieTrailer(movieId: number): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.basePath}/movie/${movieId}/videos`, httpOptions)
    );
  }
}
