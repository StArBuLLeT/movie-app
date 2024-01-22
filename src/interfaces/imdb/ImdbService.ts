import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';
import {
  HttpErrorHandler,
  HandleError,
} from 'src/app/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class ImdbService {
  private basePath = 'https://imdb-api.com';
  private apiKey = 'k_s05z0u2q';
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ImdbService');
  }

  getMostPopularMovies(): Promise<any> {
    return firstValueFrom(
      this.http.get(
        `${this.basePath}/en/API/MostPopularMovies/${this.apiKey}`,
        httpOptions
      )
    );
  }

  getMovieDetailsById(id: string): Promise<any> {
    return firstValueFrom(
      this.http.get(
        `${this.basePath}/en/API/Title/${this.apiKey}/${id}`,
        httpOptions
      )
    );
  }

  getMovieTrailer(id: string): Promise<any> {
    return firstValueFrom(
      this.http.get(
        `${this.basePath}/en/API/Trailer/${this.apiKey}/${id}`,
        httpOptions
      )
    );
  }

  getMovieImages(id: string): Promise<any> {
    return firstValueFrom(
      this.http.get(
        `${this.basePath}/en/API/Images/${this.apiKey}/${id}`,
        httpOptions
      )
    );
  }
}
