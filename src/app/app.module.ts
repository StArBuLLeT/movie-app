import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MasterPageComponent } from './master-page/master-page.component';

import { MessageService } from './message.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { SafePipe } from 'src/utils/SafePipe';
import { AppStore } from 'src/infra/AppStore';
import { TmdbService } from 'src/interfaces/tmdb/TmdbService';
import { ImdbService } from 'src/interfaces/imdb/ImdbService';
import { SearchMovieResultsComponent } from './search-movie-results/search-movie-results.component';
import { FormsModule } from '@angular/forms';
import { NgModelChangeDebouncedDirective } from 'src/utils/directives/ng-model-change-debounced.directive';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    SafePipe,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MasterPageComponent,
    PopularMoviesComponent,
    MovieDialogComponent,
    SearchMovieResultsComponent,
    NgModelChangeDebouncedDirective,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    DialogModule,
    GalleriaModule
  ],
  providers: [HttpErrorHandler, MessageService, TmdbService, ImdbService, AppStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
