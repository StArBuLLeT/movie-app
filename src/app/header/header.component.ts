import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppStore } from 'src/infra/AppStore';
import { TmdbService } from 'src/interfaces/tmdb/TmdbService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: '/'
    },
  ];

  private searchMovieSubscription: any = null;
  constructor(protected appStore: AppStore, private tmdbService: TmdbService) {}

  ngOnInit(): void {}

  async onSearchChange(searchValue: string): Promise<void> {
    if (!searchValue) {
      this.appStore.searchMovieResults = [];
    };

    if (this.searchMovieSubscription) {
      this.searchMovieSubscription.unsubscribe();
    }

    this.appStore.searchingMovie = true;
    this.searchMovieSubscription = this.tmdbService
      .searchMovie(searchValue)
      .subscribe((response) => {
        const { results } = response;
        if (results) {
          this.appStore.searchMovieResults = results;
        }

        this.appStore.searchingMovie = false;
      });
  }
}
