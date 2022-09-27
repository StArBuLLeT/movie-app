import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'details/:movieId', component: MovieDetailsComponent }
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      // Enable scrolling to anchors
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
