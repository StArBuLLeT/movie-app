import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppStore } from 'src/infra/AppStore';
import { TmdbService } from 'src/interfaces/tmdb/TmdbService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private appStore: AppStore, private tmdbService: TmdbService, private primengConfig: PrimeNGConfig) {}
  async ngOnInit() {
    this.appStore.tmdbConfiguration = await this.tmdbService.getConfiguration();
    this.primengConfig.ripple = true;
  }
}
